import HorDefault from './HorDefault';
import MiniSidebar from './MiniSidebar';
import DrawerLayout from './DrawerLayout';
import Standard from './Standard';
import BitBucket from './BitBucket';
// import HorLightNav from './HorLightNav';
import HorDarkLayout from './HorDarkLayout';
import Default from './Default';
import { NavStyle } from '@/app/constants/AppEnums';
import HeaderUserLayout from './UserHeader';
import HeaderUserMiniLayout from './UserMiniHeader';
import HorHeaderFixed from './HorHeaderFixed';

const Layouts: any = {
  [NavStyle.STANDARD]: Standard,
  [NavStyle.DEFAULT]: Default,
  [NavStyle.HEADER_USER]: HeaderUserLayout,
  [NavStyle.HEADER_USER_MINI]: HeaderUserMiniLayout,
  [NavStyle.MINI]: MiniSidebar,
  [NavStyle.DRAWER]: DrawerLayout,
  [NavStyle.BIT_BUCKET]: BitBucket,
  [NavStyle.H_DEFAULT]: HorDefault,
  [NavStyle.HOR_HEADER_FIXED]: HorHeaderFixed,
  [NavStyle.HOR_DARK_LAYOUT]: HorDarkLayout,
};
export default Layouts;
