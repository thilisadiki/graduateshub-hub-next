/**
 * Utility functions for the Graduates Hub application.
 */

/**
 * Formats a category name for display.
 * Replaces hyphens with spaces, capitalizes each word, and ensures acronyms like "IT"
 * are fully capitalized instead of becoming "It".
 * 
 * @param {string} id - The category ID (e.g., 'it', 'software-engineering')
 * @returns {string} The formatted display name (e.g., 'IT', 'Software Engineering')
 */
export const formatCategoryName = (id: string | undefined): string => {
    if (!id) return '';
    const words = id.replace(/-/g, ' ').split(' ');
    
    return words.map(word => {
        // Handle specific acronyms that should be fully capitalized
        if (word.toLowerCase() === 'it') return 'IT';
        if (word.toLowerCase() === 'seo') return 'SEO';
        if (word.toLowerCase() === 'hr') return 'HR';
        
        // Don't capitalize small words if they aren't the first word (optional enhancement)
        const smallWords = ['and', 'or', 'the', 'of', 'in', 'to', 'for'];
        if (smallWords.includes(word.toLowerCase()) && words.indexOf(word) !== 0) {
            return word.toLowerCase();
        }
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};
