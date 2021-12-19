const urlUpdater = (url: string): string => {
    // Change base url variable string to https://ik.imagekit.io/penthagon/
    if (url.length < 1) {
        return `${process.env.BASE_URL}/no-image.png`;
    }

    return url.replace("https://cdn.myanimelist.net", "https://ik.imagekit.io/penthagon");
}

const getIdFromYoutubeURL = (url: any): string => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

export {
    urlUpdater,
    getIdFromYoutubeURL
}