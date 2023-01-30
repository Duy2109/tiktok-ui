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
    const debounced= useDebounce(searchValue, 600)

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
        // trước khi gọi API thì set nó bằng true 
        setLoading(true);
        //fetch dữ liệu của back end từ api về rồi show ra view UI
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                // sau khi gọi API xong thì loading là false 
                setLoading(false)
            })
            .catch(()=>{
                // khi error thì sẽ cho loading là false 
                setLoading(false)
            })
    }, [debounced]);
    return (
        <HeadlessTippy
            interactive
            //xét điều kiện khi tồn tại showResult và searchResult sẽ hide result
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* khi có searchvalue thì nó mới hiển thị lên clear icon  */}
                {/* !! chuyển hóa kiểu dữ liệu thành boolean */}
                {/* nếu search value tồn tại thì hiển thị icon Clear và loading không hiển thị  */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearResult}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
