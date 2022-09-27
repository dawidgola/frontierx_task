import {
  IconDiscord,
  IconGoTo,
  IconInstagram,
  IconTwitter,
} from '@/assets/icons';

//static types
type AccordionBoxItem = {
  id: number;
  title: string;
  categories: string;
  percentage: string;
};

type AccordionIconItem = {
  id: number;
  icon: React.ReactNode;
  label: string;
  url: string;
  secondary?: boolean;
};

type MenuItem = { id: number; name: string; url: string };

//static
export const menu_item: MenuItem[] = [
  { id: 0, name: 'Lorem1', url: '/' },
  { id: 1, name: 'Lorem2', url: '/' },
  { id: 2, name: 'Lorem3', url: '/' },
];

export const accordion_box_items: AccordionBoxItem[] = [
  { id: 0, title: 'Lorem ipsum', categories: 'Accessories ', percentage: '9%' },
  { id: 1, title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  { id: 2, title: 'Lorem ipsum', categories: 'Background ', percentage: '25%' },
  { id: 3, title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { id: 4, title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  {
    id: 5,
    title: 'Lorem ipsum',
    categories: 'Hair & Hats ',
    percentage: '18%',
  },
  { id: 6, title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { id: 7, title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  { id: 8, title: 'Lorem ipsum', categories: 'Accessories ', percentage: '9%' },
  { id: 9, title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  {
    id: 10,
    title: 'Lorem ipsum',
    categories: 'Background ',
    percentage: '25%',
  },
  { id: 11, title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { id: 12, title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  {
    id: 13,
    title: 'Lorem ipsum',
    categories: 'Hair & Hats ',
    percentage: '18%',
  },
  { id: 14, title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { id: 15, title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  { id: 16, title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  {
    id: 17,
    title: 'Lorem ipsum',
    categories: 'Accessories ',
    percentage: '9%',
  },
  { id: 18, title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  {
    id: 19,
    title: 'Lorem ipsum',
    categories: 'Background ',
    percentage: '25%',
  },
  { id: 20, title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { id: 21, title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  {
    id: 22,
    title: 'Lorem ipsum',
    categories: 'Hair & Hats ',
    percentage: '18%',
  },
  { id: 23, title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { id: 24, title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
];

export const accordion_icon_items: AccordionIconItem[] = [
  {
    id: 0,
    icon: <IconGoTo />,
    label: 'Lorem ipsum.com',
    url: 'lorem.com',
    secondary: true,
  },
  {
    id: 1,
    icon: <IconDiscord />,
    label: 'Lorem ipsum',
    url: 'https://discord.com/',
    secondary: true,
  },
  {
    id: 2,
    icon: <IconInstagram />,
    label: 'Lorem ipsum',
    url: 'https://www.instagram.com/',
    secondary: true,
  },
  {
    id: 3,
    icon: <IconTwitter />,
    label: 'Lorem ipsum',
    url: 'https://twitter.com/home?lang=en',
  },
];
