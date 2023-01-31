import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import Config from '~/config';
import {
    faEllipsisVertical,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import images from '~/assets/images/';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import {
    BusinessSuiteIcon,
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LiveStudioIcon,
    MessageIcon,
    UserIcon,
    LanguageIcon,
    SettingIcon,
    PlusIcon,
} from '~/components/Icons';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
    // xử lí
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@Trangg',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <LiveStudioIcon />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <BusinessSuiteIcon />,
            title: 'Business Suite',
            to: '/business Suite',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={Config.routes.home} className={cx('images-style')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <button className={cx('upload-btn')}>
                                + Tải Lên
                            </button> */}
                                <button className={cx('action-btn')}>
                                    {/* <UploadIcon/> */}
                                    <PlusIcon className={cx('Plus-Icon')} />
                                    <span className={cx('upload-text')}>
                                        Upload{' '}
                                    </span>
                                </button>
                            

                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                    <span className={cx('sub-message')}>1</span>
                                </button>
                            </Tippy>

                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('sub-message')}>
                                        16
                                    </span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
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
