import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './Navbar.module.css';

const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    
    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={`${style.navbar} backdrop-blur-sm`}
             aria-label="Navigation bar"
             aria-level={1}
             role="heading">
            <div className={`${style.menu}`}
                 aria-label="Menu"
                 role="menu">
                <div className={`${style.menu_inner}`}>
                    {/* Toggle Menu for x < md devices */}
                    <div className="inline md:hidden">
                        <button className="float-left"
                                onClick={toggleMenu}>
                            <svg className='h-4 mr-2 text-gray-800'
                                 viewBox="0 0 24 24" 
                                 xmlns="http://www.w3.org/2000/svg" 
                                 fillRule="evenodd" 
                                 clipRule="evenodd">
                                <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" />
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
                    <div className="hidden md:inline">
                        <Link href="/anime">
                            <a className={`${style.menu_items} ${router.pathname === '/anime' ? style.menu_items_active : ''}`}>
                                Anime
                            </a>
                        </Link>
                        <Link href="/manga">
                            <a className={`${style.menu_items} ${router.pathname === '/manga' ? style.menu_items_active : ''}`}>
                                Manga
                            </a>
                        </Link>
                        <Link href="/characters">
                            <a className={`${style.menu_items} ${router.pathname === '/characters' ? style.menu_items_active : ''}`}>
                                Characters
                            </a>
                        </Link>
                        <Link href="/archive">
                            <a className={`${style.menu_items} ${router.pathname === '/archive' ? style.menu_items_active : ''}`}>
                                Archive
                            </a>
                        </Link>
                    </div>

                    {/* Search Action */}
                    <div className={`${style.menu_actions}`}>
                        <Link href="/search">
                            <a className={`${style.search_action} float-right`}>
                                <svg className='h-4 mr-2 text-gray-800'
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
                <div className={`${style.menubar_sm}`}
                        role="menubar">
                    <div className={`${style.menubar_sm_items}`}>
                        open menu
                    </div>
                </div>
            )}
        </div>
    );
};

export {
    Navbar
}
