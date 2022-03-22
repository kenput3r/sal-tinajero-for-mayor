export type Title = {
  english: string;
  spanish: string;
};

export type NavigationLink = {
  title: Title;
  path: string;
  primary: boolean;
  secondary: boolean;
  isExternal: boolean;
  classes: string;
  iconName: string;
};

export default NavigationLink;
