import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Search } from '../../components/Search';

const Index: NextPage = () => {
  return (
    <div className="relative h-96">
      <NextSeo
        title={`Search`}
        description={`You can search for animes, mangas, characters, and more`}
      />

      <div className="absolute inset-0 flex items-center justify-center py-4">
        <Search />
      </div>
    </div>
  );
};

export default Index;