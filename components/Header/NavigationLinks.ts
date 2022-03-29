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
];

export default navigationLinks;
