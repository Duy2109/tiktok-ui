import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "~/components/Image";
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import images from '~/assets/images/';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcoountsItem';
import Menu from '~/components/Popper/Menu';
import { BusinessSuiteIcon, CoinIcon, FeedbackIcon, InboxIcon, KeyboardIcon, LiveStudioIcon, MessageIcon, UploadIcon, UserIcon ,LanguageIcon, SettingIcon} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    // xử lí
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu=[
        {
            icon: <UserIcon/>,
            title: 'View profile',
            to: '/@Trangg',
        },
        {
            icon: <CoinIcon/>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <LiveStudioIcon/>,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <BusinessSuiteIcon/>,
            title: 'Business Suite',
            to: '/business Suite',
        },
        {
            icon: <SettingIcon/>,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate:true
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img
                    src={images.logo}
                    className={cx('images-style')}
                    alt="Tiktok"
                />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search account and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            {/* icon clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* loadding */}
                        <FontAwesomeIcon
                            className={cx('loadding')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <button className={cx('upload-btn')}>
                                + Tải Lên
                            </button> */}
                            <Tippy content="Upload Video" placement='bottom' delay={[0,200]}>
                            <button className={cx('actions-btn')}>
                                <UploadIcon/>
                            </button>
                            </Tippy>

                            <Tippy content="Message" placement='bottom' delay={[0,200]}>
                            <button className={cx('actions-btn')}>
                                <MessageIcon/>
                            <span className={cx('sub-message')}>1</span>
                            </button>
                            </Tippy>
                            
                            <Tippy content="Inbox" placement='bottom' delay={[0,200]}>
                            <button className={cx('actions-btn')}>
                                <InboxIcon/>
                                <span className={cx('sub-message')}>16</span>
                            </button>
                            </Tippy>


                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4758319940cdf9b354a4a6ade0be0886~c5_300x300.webp?x-expires=1674025200&x-signature=%2FHsP51JwR0Zigrsc6qeXbxW8Hsw%3D"
                                    alt="Trang"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
