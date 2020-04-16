import MusicApp from './components/login' 
import Navigation from './navigation';
import ProfileA from './components/ProfileA'
import Messages from './components/Messages'
import Chat from './components/MessageOpen'
import Company_Profile from './components/Company-Profile'
import Jobs from './components/Jobs'
import Job_Profile from './components/Job-Profile'
import Notifications from './components/Notification'
import NotificaçõesProfile from './components/NotificaçõesProfile'
import Galery from './components/Galery'
import Plus from './components/Plus'
import { createAppContainer,createSwitchNavigator} from 'react-navigation'

const Routes = createAppContainer(
  createSwitchNavigator({
    MusicApp,
    Navigation,
    ProfileA,
    Messages,
    Chat,
    Company_Profile,
    Jobs,
    Job_Profile,
    Notifications,
    NotificaçõesProfile,
    Galery,
    Plus
  })
);

export default Routes;