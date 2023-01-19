import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from "~/components/Image"

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4758319940cdf9b354a4a6ade0be0886~c5_300x300.webp?x-expires=1674025200&x-signature=%2FHsP51JwR0Zigrsc6qeXbxW8Hsw%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>mac.trang</span> 
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Mạc Trang 🦋</span>
            </div>
        </div>
    );
}

export default AccountItem;
