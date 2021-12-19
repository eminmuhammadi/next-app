import Image from "next/image";

import { urlUpdater } from "../../_helpers/url";
import style from "./Hero.module.css";

interface HeroProps {
    title?: string,
    description?: string,
    image?: string,
    type?: string,
}

const Hero = (props: HeroProps): JSX.Element => {

    return(
        <div className="bg-white dark:bg-black">
            <div className={`${style.hero}`}>
                <div style={{ backgroundImage: `url(${process.env.BASE_URL}/_next/image?url=${urlUpdater(props.image || '')}&w=256&q=1)` }}
                     className={`${style.background}`}>
                    <div className={`${style.inner} dark:border-gray-600`}>
                        <div className="col-span-12 md:col-span-8">
                            <h2 className={`${style.title}`}
                                aria-label="Title">
                                { props.title }
                            </h2>
                            <p></p>
                            <p className={`${style.description} dark:text-slate-300`}
                                aria-label="Description">
                                { props.description }
                            </p>
                        </div>

                        <div className="col-span-12 md:col-span-4 hidden md:block float-right">
                            <div className={`aspect-ratio ${style.poster_frame}`}
                                 aria-label="Poster">
                                <Image src={`${urlUpdater(props.image || '')}`} 
                                    alt={`${props.title}`}
                                    width={225}
                                    height={300}
                                    className={`${style.poster} dark:bg-black`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    Hero
}
