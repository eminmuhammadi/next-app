import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { getListOfSeasons } from '../../_data/season';
import { SeasonArchive, Archive, Season } from '../../_data/_interfaces/season/SeasonArchive';

import style from "./Archive.module.css";

interface Props {
  data: Archive[],
}

const Index: NextPage<Props> = (props) => {
  return (
    <div className="container mx-auto">
      <NextSeo
        title={`Archive`}
        description={`List of all years and its seasons`}
      />

      <h3 className="container mx-auto text-center text-3xl pt-10 pb-2">
        Archive
      </h3>

      <div className="flex justify-center items-center grid grid-cols-12">
        {
          props.data.map((archive, index) => {
            return (
              <div className={`${style.data}`} key={index}>
                <div className="col-span-1 md:col-span-2"></div>
                <h4 className={`dark:text-slate-200 ${style.year}`}>
                  {archive.year}
                </h4>
                <div className={`dark:text-slate-400 ${style.season}`}>
                  {
                    archive.seasons.map((season, index) => {
                      return (
                        <div className={`dark:hover:text-slate-300 ${style.season_item}`} 
                             key={index}>
                          <Link href={`/archive/${archive.year}/${season.toLocaleLowerCase()}`}>
                            { season }
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="col-span-1 md:col-span-2"></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

/**
 * 
 * @param ctx 
 * @returns 
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (process.env.NODE_ENV !== 'development') {
    ctx.res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    );
  }

  const res: SeasonArchive = await getListOfSeasons();

  if (!res || res.archive.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: res.archive,
    },
  };
}

export default Index;