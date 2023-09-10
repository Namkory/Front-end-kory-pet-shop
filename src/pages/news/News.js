import './News.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '../../asset/image/index';

function News() {
    return (
        <div className="news">
            <div className="container">
                <div className="news-header">
                    <h1>CATEGORY ARCHIVES: TIN TỨC</h1>
                </div>
                <div className="news-content">
                    <div className="news-content-left">
                        <div className="news-content-left-search">
                            <input type="text" placeholder="Tìm kiếm..." />
                            <div className="news-content-left-search-btn">
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </div>
                        </div>
                        <div className="news-content-left-title">
                            <p>BÀI VIẾT MỚI</p>
                        </div>
                        <div className="news-content-left-content">
                            <div className="content-item">
                                <img src={images.new1} alt="new avatar" className="avatar-title" />
                                <p>Duis luctus elit nisi, et cursus magna pellentesque non.</p>
                            </div>
                            <div className="content-item">
                                <img src={images.new2} alt="new avatar" className="avatar-title" />
                                <p>Mauris tristique pretium tempus. Vestibulum et accumsan magna.</p>
                            </div>
                            <div className="content-item">
                                <img src={images.new3} alt="new avatar" className="avatar-title" />
                                <p>
                                    Aliquam placerat nisl nec imperdiet vehicula. Phasellus tempus ligula id orci
                                    finibus feugiat.
                                </p>
                            </div>
                            <div className="content-item">
                                <img src={images.new4} alt="new avatar" className="avatar-title" />
                                <p>
                                    In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a
                                    egestas.
                                </p>
                            </div>
                            <div className="content-item" style={{ border: 'none' }}>
                                <img src={images.new5} alt="new avatar" className="avatar-title" />
                                <p>Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="news-content-right grid grid-cols-3 gap-6">
                        <div className="news-content-right-item">
                            <img src={images.new_banner1} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>Duis luctus elit nisi, et cursus magna pellentesque non.</h1>
                                <p>Chế độ ăn cho chó con Chó con từ 2 tháng tuổi đến 6 tháng [...]</p>
                            </div>
                        </div>
                        <div className="news-content-right-item">
                            <img src={images.new_banner2} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>Mauris tristique pretium tempus. Vestibulum et accumsan magna.</h1>
                                <p>Tuổi thọ trung bình của mèo nếu sống trong nhà là 13 năm. Nhưng nếu [...] </p>
                            </div>
                        </div>
                        <div className="news-content-right-item">
                            <img src={images.new_banner3} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>
                                    Aliquam placerat nisl nec imperdiet vehicula. Phasellus tempus ligula id orci
                                    finibus feugiat.
                                </h1>
                                <p>Kinh nghiệm nuôi chó con: Chọn chó con khỏe mạnh để nuôi Mọi người khi đi [...] </p>
                            </div>
                        </div>
                        <div className="news-content-right-item">
                            <img src={images.new_banner4} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>
                                    In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a
                                    egestas.
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non
                                    viverra consequat, tellus [...]
                                </p>
                            </div>
                        </div>
                        <div className="news-content-right-item">
                            <img src={images.new_banner5} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>Duis luctus elit nisi, et cursus magna pellentesque non.</h1>
                                <p>
                                    In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a
                                    egestas. [...]{' '}
                                </p>
                            </div>
                        </div>
                        <div className="news-content-right-item">
                            <img src={images.new6} alt="new avatar" className="avatar-title" />
                            <div className="news-content-right-item-title">
                                <h1>Duis luctus elit nisi, et cursus magna pellentesque non.</h1>
                                <p>
                                    In lobortis erat orci, at viverra leo lobortis non. Pellentesque at augue ac lectus
                                    fermentum [...]{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
