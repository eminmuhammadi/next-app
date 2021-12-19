import {useTheme} from 'next-themes';

import style from "./Footer.module.css";

const Footer = (): JSX.Element => {
    const {theme, setTheme} = useTheme();

    return(
        <div className={`${style.footer} dark:bg-black dark:text-gray-50 dark:border-gray-800`}
            aria-label="Footer">
            <div className="container mx-auto">
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    toggle
                </button>
            </div>
        </div>
    );
};

export {
    Footer
}
