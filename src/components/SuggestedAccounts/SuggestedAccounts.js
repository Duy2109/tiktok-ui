import styles from "./SuggestedAccounts.module.scss";
import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import AccountItem from "./AccountItem";
const cx = classNames.bind(styles);

function SuggestedAccounts({label, seeAll}) {
    return (
    <div className={cx('wrapper')}>
            <p className={cx('label')}> {label} </p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p className={cx('see-all')}> {seeAll} </p>
    </div>
    )
}


SuggestedAccounts.propTypes={
    label: PropTypes.string.isRequired
}
export default SuggestedAccounts;