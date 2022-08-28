//Layouts
import { HeaderOnly } from '~/components/Layout'

//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following';
import Live from '~/pages/Live'
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
//public routes
const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/live', compoment: Live },
    { path: '/upload', compoment: Upload, layout: HeaderOnly },
    { path: '/profile', compoment: Profile },
    { path: '/search', compoment: Search }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }