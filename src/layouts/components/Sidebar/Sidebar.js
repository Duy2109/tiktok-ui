import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import Config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={Config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon/>}
                />
                <MenuItem
                    title="Following"
                    to={Config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon/>}
                />
                <MenuItem
                    title="LIVE"
                    to={Config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon/>}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
