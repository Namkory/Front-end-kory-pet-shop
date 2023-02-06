import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Layout({ children }) {
    return (
        <div className="">
            <div className=" header ">
                <Header />
            </div>
            <div className="">{children}</div>
            <div className="Footer ">
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
