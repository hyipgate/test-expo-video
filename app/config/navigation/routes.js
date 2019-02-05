import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'SocialMenu',
    title: '个人信息',
    icon: FontIcons.profile,
    screen: Screens.ProfileSettings,
    children: []
  },
  {
    id: 'ArticlesMenu',
    title: '我的学生',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: [
      {
        id: 'Articles1',
        title: '王涬之',
        screen: Screens.MyChildProfile,
        children: [],
      },
      {
        id: 'Articles3',
        title: '王淯之',
        screen: Screens.MyChildProfile,
        children: [],
      }
    ],
  },
 
  {
    id: 'TeacherAnnoucementMenu',
    title: '老师通知',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      
      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        children: [],
      },
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        children: [],
      },
    ],
  },
  
  {
    id: 'ParentEventsMenu',
    title: '家长互动',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        children: [],
      },
      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        children: [],
      },
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        children: [],
      },
    ],
  } 
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  children: [
    {
      id: 'TeacherMeChat',
      title: 'Chat',
      screen: Screens.Chat,
      children: [],
    }
  ],
});
  

export const MenuRoutes = menuRoutes;
