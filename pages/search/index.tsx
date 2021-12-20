import type { NextPage } from 'next';
import { Search } from '../../components/Search';

const Index: NextPage = () => {
  return (
    <div className="container mx-auto">
        <div className="py-4">
            <Search/>
        </div>
    </div>
  );
};

export default Index;