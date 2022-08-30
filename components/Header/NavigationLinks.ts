import NavigationLink from '@customTypes/navigation-link';

const navigationLinks: NavigationLink[] = [
  {
    title: {
      english: 'Home',
      spanish: 'Inicio',
    },
    path: '/',
    primary: true,
    secondary: true,
    isExternal: false,
    classes: '',
    iconName: 'homeIcon',
  },
  {
    title: {
      english: 'About Sal',
      spanish: 'About Sal',
    },
    path: '/about-sal',
    primary: false,
    secondary: true,
    isExternal: false,
    classes: '',
    iconName: 'aboutIcon',
  },
  {
    title: {
      english: 'Priorities',
      spanish: 'Priorities',
    },
    path: '/priorities',
    primary: false,
    secondary: true,
    isExternal: false,
    classes: '',
    iconName: 'priorityIcon',
  },
  {
    title: {
      english: 'Endorsements',
      spanish: 'Endosos',
    },
    path: '/endorsements',
    primary: false,
    secondary: true,
    isExternal: false,
    classes: '',
    iconName: 'thumbsUpIcon',
  },
  {
    title: {
      english: 'Announcement',
      spanish: 'Anuncio',
    },
    path: '/announcement',
    primary: false,
    secondary: true,
    isExternal: false,
    classes: '',
    iconName: 'announcementIcon',
  },
  {
    title: {
      english: 'Donate',
      spanish: 'Donación',
    },
    path: 'https://www.efundraisingconnections.com/c/SalTinajeroforMayor/',
    primary: false,
    secondary: true,
    isExternal: true,
    classes: '',
    iconName: 'donateIcon',
  },
];

export default navigationLinks;
