'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus();
        }
    }, [isExpanded]);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (query === '') {
                    setIsExpanded(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [query]);

    const toggleSearch = () => {
        if (isExpanded && query) {
            // If open and has query, submit
            handleSearch(new Event('submit') as unknown as React.FormEvent);
        } else {
            setIsExpanded(!isExpanded);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
            // Optional: Close on search? Maybe keep open to refine.
            // setIsExpanded(false); 
        }
    };

    return (
        <form
            ref={containerRef}
            onSubmit={handleSearch}
            className={`${styles.container} ${isExpanded ? styles.expanded : ''}`}
        >
            <button type="button" className={styles.iconButton} onClick={toggleSearch} aria-label="Arama">
                <Search size={22} />
            </button>

            <input
                ref={inputRef}
                type="text"
                placeholder="Ara..."
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {isExpanded && (
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => {
                        setQuery('');
                        setIsExpanded(false);
                    }}
                >
                    <X size={16} />
                </button>
            )}
        </form>
    );
}
