import style from "./Search.module.css";

const Search = (): JSX.Element => {
    return(
        <form method="get" 
               action="/search/results"
               className="w-full">
            <h3 className="container mx-auto text-base md:text-3xl pt-10 pb-2">
                 Search
                 <select name="type" 
                         className="mx-2 px-1 py-1 bg-gray-50 rounded-lg">
                    <option value="manga">Anime</option>
                    <option value="manga">Manga</option>
                    <option value="character">Character</option>
                </select>
            </h3>
            <div className="py-4 container-mx-auto grid grid-cols-12">
                <div className="col-span-11 md:col-span-12">
                    <input type="search"
                       name="q"
                       autoComplete="off"
                       placeholder="Naruto..."
                       className="rounded-lg w-full shadow-sm h-6 md:h-12 px-3 py-2 placeholder-gray-500 appearance-none border border-gray-300"/>
                </div>
                <div className="col-span-1 md:col-span-12"></div>
            </div>
        </form>
    );
};

export {
    Search
}
