import { urlUpdater } from "../../_helpers/url";
import { Article } from "../../_data/_interfaces/anime/News";

import style from "./News.module.css";

interface NewsProps {
    data: Article[]
}

const News = (props: NewsProps): JSX.Element => {
    if (props.data.length === 0) {
        return (
            <></>
        );
    }

    return (
        <div className="container mx-auto py-8 mt-10">
            <h3 className="text-3xl pb-4">News</h3>
            <div className="grid grid-cols-12 gap-2">
            {
                props.data.map((article: Article, index: number) => {
                    return (
                        <div key={index} 
                            className={`dark:bg-black dark:border-gray-800 ${style.item}`}>
                            <div className="md:flex">
                                <div style={{ 
                                        backgroundImage: `url(${process.env.BASE_URL}/_next/image?url=${urlUpdater(article.image_url || '')}&w=256&q=80)` 
                                    }}
                                    className={`${style.image}`}/>
                                <div className="container py-4">
                                    <a href={`${article.url}`}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                       className={`dark:text-gray-50 ${style.title}`}>
                                        { article.title }
                                    </a>
                                    <p className={`${style.intro}`}>
                                        { article.intro }
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );

};

export {
    News
}