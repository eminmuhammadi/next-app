import style from "./Search.module.css";

const Search = (): JSX.Element => {
    return(
        <form method="get" 
               action="/search/results"
               className="w-full">
            <h3 className="container mx-auto text-base md:text-3xl pt-10 pb-2">
                 Search
                 <select name="type" 
                         className={`dark:bg-gray-900 ${style.select}`}>
                    <option value="anime">Anime</option>
                    <option value="manga">Manga</option>
                    <option value="character">Character</option>
                </select>
            </h3>
            <div className="py-4 container mx-auto grid grid-cols-12">
                <div className="col-span-11 md:col-span-12">
                    <input type="search"
                       name="q"
                       autoComplete="off"
                       placeholder="Naruto..."
                       className={`dark:bg-gray-900 dark:border-gray-700 ${style.input}`}/>
                </div>
                <div className="col-span-1 md:col-span-12"></div>
            </div>
        </form>
    );
};

export {
    Search
}
