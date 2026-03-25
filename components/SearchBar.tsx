'use client';
import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { courses } from '@/data/courses';

export default function SearchBar({
  placeholder = 'What do you want to learn?',
  buttonText = 'Search',
  buttonColor = 'bg-blue-600 hover:bg-blue-700',
  variant = 'default',
}: {
  placeholder?: string;
  buttonText?: string;
  buttonColor?: string;
  variant?: string;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof courses>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();
      const filtered = courses.filter(c => c.title.toLowerCase().includes(lowerQuery)).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (title: string) => {
    setSearchQuery(title);
    setShowSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(title)}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isHeader = variant === 'header';

  return (
    <form
      onSubmit={handleSearch}
      className={`flex ${isHeader ? 'w-full max-w-2xl relative' : 'w-full max-w-xl mx-auto flex-col md:flex-row gap-4'}`}
      ref={searchRef}
    >
      <div className={`relative flex-grow text-left ${isHeader ? 'flex text-gray-800' : ''}`}>
        {!isHeader && <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />}
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => { if (searchQuery.trim().length > 0) setShowSuggestions(true); }}
          placeholder={placeholder}
          className={`w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm border border-gray-300 ${isHeader
            ? 'pl-5 pr-12 py-2.5 rounded-full text-sm'
            : 'pl-10 pr-4 py-3 rounded-lg text-gray-900'}`}
        />
        {isHeader && (
          <button
            type="submit"
            aria-label="Submit search"
            className={`absolute right-1 top-1 bottom-1 ${buttonColor} text-white w-9 rounded-full flex items-center justify-center transition-colors`}
          >
            <Search size={16} strokeWidth={3} />
          </button>
        )}
        {showSuggestions && suggestions.length > 0 && (
          <ul className={`absolute z-50 w-full bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-h-60 overflow-y-auto ${isHeader ? 'mt-12 left-0' : 'mt-2'}`}>
            {suggestions.map(course => (
              <li
                key={course.id}
                onClick={() => handleSuggestionClick(course.title)}
                className="px-4 py-3 text-gray-800 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0 flex flex-col"
              >
                <span className="font-semibold text-sm line-clamp-1">{course.title}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">{course.category}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {!isHeader && (
        <button type="submit" className={`${buttonColor} text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap z-10 shadow-sm`}>
          {buttonText}
        </button>
      )}
    </form>
  );
}
