import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './Navbar.module.css';

interface MenuItemsProps {
    isDeviceSmaller: boolean
}

const MenuItems = ({ isDeviceSmaller }: MenuItemsProps): JSX.Element => {
    const router = useRouter();

    const routes = [
        { name: 'Anime', path: '/anime' },
        { name: 'Manga', path: '/manga' },
        { name: 'Characters', path: '/characters' },
        { name: 'Archive', path: '/archive' },
    ];

    const isDeviceSmallerClass = isDeviceSmaller ? style.menu_item_sm : '';
    const isActive = (path:string) => {
        return router.pathname === path ? `${style.menu_items_active} dark:text-gray-100 dark:font-normal` : '';
    };

    return (
        <>
            { routes.map((route, index) => {
                return(
                    <Link href={`${route.path}`} key={index}>
                        <a className={`${style.menu_items} after:content-['_›_'] md:after:content-[''] ${isDeviceSmallerClass} ${isActive(route.path)} dark:hover:bg-gray-900/60 dark:hover:text-gray-200`}>
                            { route.name }
                        </a>
                    </Link>
                )
            })}
        </>
    );
}

export {
    MenuItems
}