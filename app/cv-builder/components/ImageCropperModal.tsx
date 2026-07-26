'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCw, RefreshCw, Check, X } from 'lucide-react';

interface Props {
  src: string;
  isOpen: boolean;
  onClose: () => void;
  onCrop: (croppedDataUrl: string) => void;
}

export default function ImageCropperModal({ src, isOpen, onClose, onCrop }: Props) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ eX: 0, eY: 0, posX: 0, posY: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Reset state when a new image source is loaded
  const resetTransform = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!src || !isOpen) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      resetTransform();
    };
    img.src = src;
  }, [src, isOpen, resetTransform]);

  // Draw preview canvas
  const drawPreview = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 300;
    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, size, size);
    ctx.save();

    // Center origin
    ctx.translate(size / 2 + position.x, size / 2 + position.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);

    // Calculate aspect ratio cover fit
    const aspect = img.width / img.height;
    let drawW = size;
    let drawH = size;
    if (aspect > 1) {
      drawW = size * aspect;
    } else {
      drawH = size / aspect;
    }

    ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
  }, [zoom, rotation, position]);

  useEffect(() => {
    if (isOpen) {
      drawPreview();
    }
  }, [isOpen, zoom, rotation, position, drawPreview]);

  if (!isOpen || !src) return null;

  // Pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ eX: e.clientX, eY: e.clientY, posX: position.x, posY: position.y });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const dx = e.clientX - dragStart.eX;
    const dy = e.clientY - dragStart.eY;
    setPosition({ x: dragStart.posX + dx, y: dragStart.posY + dy });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const croppedUrl = canvas.toDataURL('image/jpeg', 0.92);
    onCrop(croppedUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-gray-900 text-lg">Adjust Profile Photo</h3>
            <p className="text-xs text-gray-500">Drag to re-center or zoom to frame your face.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Canvas Crop Viewport */}
        <div className="p-6 bg-gray-900 flex flex-col items-center justify-center select-none">
          <div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/90 shadow-2xl cursor-move touch-none bg-black flex items-center justify-center"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <canvas ref={canvasRef} className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
          </div>
          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
            <span>💡</span> Drag inside the circle to adjust your position
          </p>
        </div>

        {/* Controls Bar */}
        <div className="px-6 py-4 space-y-4 bg-gray-50/50">
          {/* Zoom Slider */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
              <span className="flex items-center gap-1">
                <ZoomIn size={14} className="text-gray-400" /> Zoom Level
              </span>
              <span>{Math.round(zoom * 100)}%</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, z - 0.15))}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ZoomOut size={16} />
              </button>
              <input
                type="range"
                min="1"
                max="3"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(3, z + 0.15))}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ZoomIn size={16} />
              </button>
            </div>
          </div>

          {/* Action buttons bar */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={handleRotate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <RotateCw size={14} className="text-gray-500" /> Rotate 90°
            </button>
            <button
              type="button"
              onClick={resetTransform}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw size={14} className="text-gray-500" /> Reset
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-gray-100 bg-white flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary hover:bg-[#5a4000] text-white text-sm font-bold shadow-sm transition-colors"
          >
            <Check size={16} /> Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
}
