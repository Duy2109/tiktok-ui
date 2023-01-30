import routesConfig from "~/config/routes"

import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

//public Routes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
