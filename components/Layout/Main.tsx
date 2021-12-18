import { Footer } from "../Footer";
import { Navbar } from "./../Navbar";

import style from './Layout.module.css';

interface Props {
    children: React.ReactNode;
}

const MainLayout = (props: Props) => {
    return (
        <div>
            <Navbar />

            <main className={`${style.main_layout}`} 
                  aria-label="Main content"
                  role="main">
                <div className={`${style.main}`}
                     role="contentinfo">
                    { props.children }
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export {
    MainLayout
}