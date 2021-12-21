import { useTheme } from 'next-themes';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MenuItems } from './MenuItems';
import style from './Navbar.module.css';

const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`${style.navbar} backdrop-blur-sm dark:bg-black/75 dark:text-gray-200 dark:backdrop-gray-900 dark:border-gray-800`}
            aria-label="Navigation bar"
            aria-level={1}
            role="heading">
            <div className={`${style.menu}`}
                aria-label="Menu"
                role="menu">
                <div className={`${style.menu_inner} dark:border-gray-800`}>
                    {/* Toggle Menu for x < md devices */}
                    <div className="inline md:hidden">
                        <button className="float-left"
                            onClick={toggleMenu}
                            aria-label="Toggle menu">
                            <svg className="h-4 text-gray-800 fill-gray-800 dark:fill-gray-50"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd">
                                <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" />
                                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
                            </svg>
                        </button>
                    </div>

                    {/* Brand */}
                    <Link href="/">
                        <a className={`${style.brand} bg-gray-50 dark:bg-gray-900 dark:text-slate-200 text-slate-900 px-2 py-1 rounded-lg`}
                            aria-label={`${process.env.APP_NAME}`}>
                            Penthagon
                        </a>
                    </Link>

                    {/* Menu for md devices */}
                    <div className="hidden md:inline dark:text-gray-50">
                        <MenuItems isDeviceSmaller={false} />
                    </div>

                    {/* Search Action */}
                    <div className={`${style.menu_actions}`}>
                        <Link href="/search"
                            aria-label="Search menu">
                            <a className={`${style.search_action} float-right dark:hover:bg-gray-900/60 dark:hover:text-gray-200`}>
                                <svg className="h-4 mr-0 md:mr-2 text-gray-800 fill-gray-800 dark:fill-gray-50"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd">
                                    <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                                </svg>
                                <span className={`${style.search_action_text}`}>
                                    Search
                                </span>
                            </a>
                        </Link>
                        {/* Theme Toggle */}
                        <button className={`hidden md:block float-right dark:hover:bg-gray-900/60 dark:hover:text-gray-200`}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label="Toggle theme">
                            <span className={`${style.theme_toggle_text}`}>
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         width={16} 
                                         height={16}
                                         className="h-4 ml-0 md:ml-2 text-gray-800 fill-gray-800 dark:fill-gray-50"
                                         viewBox="0 0 24 24">
                                             <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         width={16} 
                                         height={16}
                                         className="h-4 ml-0 md:ml-2 text-gray-800 fill-gray-800 dark:fill-gray-50"
                                         viewBox="0 0 24 24">
                                             <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                                    </svg>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu for x < md devices */}
            {isOpen && (
                <div className={`${style.menubar_sm} dark:bg-black dark:border-gray-800`}
                    role="menubar">
                    <div className={`${style.menubar_sm_items} dark:border-gray-800`}>
                        <MenuItems isDeviceSmaller={true} />
                    </div>
                </div>
            )}
        </div>
    );
};

export {
    Navbar
}
