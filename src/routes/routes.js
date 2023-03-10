import Config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

//public Routes
const publicRoutes = [
    {
        path: Config.routes.home,
        component: Home,
    },
    {
        path: Config.routes.following,
        component: Following,
    },
    {
        path: Config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: Config.routes.profile,
        component: Profile,
    },
    {
        path: Config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: Config.routes.live,
        component: Live,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
