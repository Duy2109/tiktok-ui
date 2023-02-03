import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {

    const renderPreview=(props)=>{
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div  className={cx('preview')}>
                        <AccountPreview/>
                    </div>
                </PopperWrapper>
            </div>
        )
    }   
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-22,0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f3fbbdb2784157055a2729bd3160bf09.jpeg?x-expires=1675411200&x-signature=Ww9dG56rUwiuCpZOPDpztHjgELg%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>yenlinh161102</strong>
                            <FontAwesomeIcon
                                className={cx('checkicon')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>Yến Linh ❤🌸</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};
export default AccountItem;
