import Link from 'next/link';
import Image from 'next/image';

import style from "./Footer.module.css";

const Footer = (): JSX.Element => {
    return (
        <div className={`${style.footer} dark:bg-black dark:text-gray-50 dark:border-gray-800`}
            aria-label="Footer">
            <div className="container mx-auto text-sm text-slate-400 text-center">
                <div className="md:flex justify-center pb-5">
                    <div className="mr-2 my-1 hover:text-slate-500">
                        <Link href="/anime">
                            Anime
                        </Link>
                        <span className="hidden md:inline px-1">•</span>
                    </div>

                    <div className="mr-2 my-1 hover:text-slate-500">
                        <Link href="/manga">
                            Manga
                        </Link>
                        <span className="hidden md:inline px-1">•</span>
                    </div>

                    <div className="mr-2 my-1 hover:text-slate-500">
                        <Link href="/characters">
                            Characters
                        </Link>
                        <span className="hidden md:inline px-1">•</span>
                    </div>

                    <div className="mr-2 my-1 hover:text-slate-500">
                        <Link href="/archive">
                            Archive
                        </Link>
                        <span className="hidden md:inline px-1">•</span>
                    </div>

                    <div className="mr-2 my-1 hover:text-slate-500">
                        <Link href="/search">
                            Search
                        </Link>
                    </div>
                </div>

                <Link href="/"
                    passHref={true}>
                    <a>
                        <Image src="/emiga-logo.png"
                            height={48}
                            width={52}
                            alt={`${process.env.APP_NAME}`}
                            className="cursor-pointer"/>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export {
    Footer
}
