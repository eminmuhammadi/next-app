import { useState } from 'react';
import Link from 'next/link';

import { MenuItems } from './MenuItems';
import style from './Navbar.module.css';

const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

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
                        <a className={`${style.brand}`}
                            aria-label="Brand">
                            Brand
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
