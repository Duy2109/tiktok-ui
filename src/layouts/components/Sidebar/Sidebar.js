import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import Config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import * as followerServices from '~/services/followerServices';

const cx = classNames.bind(styles);
const PER_PAGE =5;


function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    const [followerUsers, setFollowers] = useState([]);


    
    useEffect(() => {
        userService
        .getSuggested({page: 1, perpage:PER_PAGE})
        .then((data) => {
            setSuggestedUsers(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    useEffect(()=>{
        followerServices
        .setFollowers({page: 1 })
        .then((data) => {
            setFollowers(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={Config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={Config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={Config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <SuggestedAccounts
                    data={suggestedUsers}
                    label="Suggested accounts"
                    seeAll="See all"
                />
                <SuggestedAccounts
                    data={followerUsers}
                    label="Following accounts"
                    seeAll="See all"
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
