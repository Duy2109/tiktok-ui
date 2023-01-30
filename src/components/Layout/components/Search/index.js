import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcoountsItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';
const cx = classNames.bind(styles);

function Search() {
    //kết quả tìm kiếm
    const [searchResult, setSearchResult] = useState([]);

    //dữ liệu truyền vào ô tìm kiếm
    const [searchValue, setSearchValue] = useState('');

    //hiển thị kết quả tìm kiếm
    const [showResult, setShowResult] = useState(true);

    //loadding khi tìm kiếm
    const [loading, setLoading] = useState(false);

    // lần đầu tiên nó sẽ là chuỗi rỗng
    const debounced = useDebounce(searchValue, 600);

    // sau khi nhấn nút xóa đồng thời focus vào ô input , ta sử dụng useRef()
    const searchValueRef = useRef();

    // xử lí khi blur ra ngoài ô tìm kiếm sẽ ẩn nội dung tìm kiếm đi
    const handleHideResult = () => {
        setShowResult(false);
    };
    //xử lí clear Input
    const handleClearResult = () => {
        setSearchValue('');
        searchValueRef.current.focus();
        setSearchResult([]);
    };

    useEffect(() => {
        //nếu không có search value thì nó sẽ return
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        //fetch dữ liệu của back end từ api về rồi show ra view UI
        const fetchApi = async () => {
            // trước khi gọi API thì set nó bằng true
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    //xử lí không cho người dùng nhập dấu khoảng cách đầu tiên vào ô tìm tiếm

    const handleChange = (e) => {
        const searchValue = e.target.value;
        // nếu dữ liệu nhập vào input bắt đầu không phải là khoảng trắng
        // thì cho phép người dùng nhập chữ số bình thường
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        // sử dụng thẻ div hoặc thẻ span để bao bọc bên ngoài trách làm ảnh hưởng 
        // hoặc xung đột các element bên trong dẫn đến cảnh báo 
        <div>
            <HeadlessTippy
                interactive
                //xét điều kiện khi tồn tại showResult và searchResult sẽ hide result
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchValueRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck={false}
                        //ràng buộc hai chiều khi nhập dữ liệu vào ô input , sẽ lưu dữ liệu nhập vào setSearchValue
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {/* khi có searchvalue thì nó mới hiển thị lên clear icon  */}
                    {/* !! chuyển hóa kiểu dữ liệu thành boolean */}
                    {/* nếu search value tồn tại thì hiển thị icon Clear và loading không hiển thị  */}
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={handleClearResult}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
