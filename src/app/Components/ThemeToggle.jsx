'use client'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <FaMoon className="w-5 h-5 text-gray-800" />
            ) : (
                <FaSun className="w-5 h-5 text-yellow-400" />
            )}
        </button>
    )
} 