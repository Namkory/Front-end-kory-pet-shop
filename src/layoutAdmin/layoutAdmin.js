import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import './layoutAdmin.scss';

function Layout({ children }) {
    return (
        <div className="flex">
            <div className="sidebar w-72 ">
                <Sidebar />
            </div>
            <div className="homeContainer flex-1">
                <div className="h-28 navbar ">
                    <Navbar />
                </div>
                <div className="p-7 h-screen">{children}</div>
            </div>
        </div>
    );
}

export default Layout;
