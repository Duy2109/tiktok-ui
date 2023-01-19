import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcoountsItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    //kết quả tìm kiếm
    const [searchResult, setSearchResult] = useState([]);
    //dữ liệu truyền vào ô tìm kiếm
    const [searchValue, setSearchValue] = useState('');
    //
    const [showResult, setShowResult ] = useState(true);

    // sau khi nhấn nút xóa đồng thời focus vào ô input , ta sử dụng useRef()
    const searchValueRef = useRef();
    // xử lí khi blur ra ngoài ô tìm kiếm sẽ ẩn nội dung tìm kiếm đi 
    const handleHideResult=()=>{
        setShowResult(false)
    }
    //xử lí clear Input 
    const handleClearResult=()=>{
        setSearchValue('');
        searchValueRef.current.focus();
        setSearchResult([])
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 11, 2]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive
            //xét điều kiện khi tồn tại showResult và searchResult sẽ hide result 
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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
                    onFocus={()=>setShowResult(true)}
                />
                {/* khi có searchvalue thì nó mới hiển thị lên clear icon  */}
                {/* !! chuyển hóa kiểu dữ liệu thành boolean */}
                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={handleClearResult}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loadding')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
