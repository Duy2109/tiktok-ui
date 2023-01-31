import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);

function Menu({title, onBack}) {

    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}


Menu.propTypes = {
    //bắt buộc
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}
export default Menu;
