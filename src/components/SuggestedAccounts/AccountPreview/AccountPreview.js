import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} 
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f3fbbdb2784157055a2729bd3160bf09.jpeg?x-expires=1675411200&x-signature=Ww9dG56rUwiuCpZOPDpztHjgELg%3D" 
                alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                            <strong>yenlinh161102</strong>
                            <FontAwesomeIcon
                                className={cx('checkicon')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>Yến Linh ❤🌸</p>
                        <p className={cx('analytics')}>
                            <strong className={cx('value')}>
                                    8.2M  
                            </strong>
                            <span className={cx('label')}>Followers</span>
                            <strong className={cx('value')}>
                                    8.2M 
                            </strong>
                            <span className={cx('label')}> Likes</span>
                        </p>
            </div>

        </div>
    );
}

export default AccountPreview;
