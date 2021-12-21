import Image from "next/image";
import useSWR from 'swr';
import fetcher from './../../_helpers/fetcher';

import { Pictures, Picture } from "./../../_data/_interfaces/anime/Pictures";
import { urlUpdater } from "../../_helpers/url";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

interface GalleryProps {
    type: string,
    id: number,
}

const GalleryCSR = (props: GalleryProps): JSX.Element => {
    const fetch = (url: string) => fetcher.get<Pictures>(url);
    const { data } = useSWR(`/${props.type}/${props.id}/pictures`, fetch);

    if (!data) {
        return(
            <div>
                <p className="text-center pt-5">
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                {
                    data.pictures[0]?.large && (
                        <div>
                            <h3 className="text-3xl py-6">Pictures</h3>

                            <div className="dark:bg-gray-900 rounded-lg flex overflow-x-scroll h-36 pt-3 pb-5 bg-gray-50">
                                {data.pictures?.map((picture: Picture, index: number) => {
                                    return (
                                        <a href={`${urlUpdater(picture.large || '')}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            key={index}
                                            className="rounded-lg ml-2 bg-gray-50 inline-block">
                                            <Image src={`${urlUpdater(picture.large || '')}`}
                                                height={100}
                                                width={100}
                                                layout="fixed"
                                                objectFit="cover"
                                                objectPosition="center"
                                                className="w-full h-16 md:w-48 h-48 rounded border hover:shadow-lg"
                                                alt={`${props.type} ${index}`} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }

                {
                    data.pictures[0]?.image_url && (
                        <div>
                            <h3 className="text-3xl py-6">Pictures</h3>

                            <div className="dark:bg-gray-900 rounded-lg flex overflow-x-scroll h-36 pt-3 pb-5 bg-gray-50">
                                {data.pictures?.map((picture: Picture, index: number) => {
                                    return (
                                        <a href={`${urlUpdater(picture.image_url || '')}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            key={index}
                                            className="rounded-lg ml-2 bg-gray-50 inline-block">
                                            <Image src={`${urlUpdater(picture.image_url || '')}`}
                                                height={100}
                                                width={100}
                                                layout="fixed"
                                                objectFit="cover"
                                                objectPosition="center"
                                                className="w-full h-16 md:w-48 h-48 rounded border hover:shadow-lg"
                                                alt={`${props.type} ${index}`} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            </SRLWrapper>
        </SimpleReactLightbox>
    );
};

export {
    GalleryCSR
}
