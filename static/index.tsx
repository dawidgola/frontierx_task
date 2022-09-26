import {
  IconDiscord,
  IconGoTo,
  IconInstagram,
  IconTwitter,
} from '@/assets/icons';

//static types
type AccordionBoxItem = {
  title: string;
  categories: string;
  percentage: string;
};

type AccordionIconItem = {
  icon: React.ReactNode;
  label: string;
  url: string;
  secondary?: boolean;
};

type MenuItem = { name: string; url: string };

//static
export const menu_item: MenuItem[] = [
  { name: 'Lorem1', url: '/' },
  { name: 'Lorem2', url: '/' },
  { name: 'Lorem3', url: '/' },
];

export const accordion_box_items: AccordionBoxItem[] = [
  { title: 'Lorem ipsum', categories: 'Accessories ', percentage: '9%' },
  { title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  { title: 'Lorem ipsum', categories: 'Background ', percentage: '25%' },
  { title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Hair & Hats ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  { title: 'Lorem ipsum', categories: 'Accessories ', percentage: '9%' },
  { title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  { title: 'Lorem ipsum', categories: 'Background ', percentage: '25%' },
  { title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Hair & Hats ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  { title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
  { title: 'Lorem ipsum', categories: 'Accessories ', percentage: '9%' },
  { title: 'Lorem ipsum', categories: 'Arms ', percentage: '15%' },
  { title: 'Lorem ipsum', categories: 'Background ', percentage: '25%' },
  { title: 'Lorem ipsum', categories: 'Eye ', percentage: '8%' },
  { title: 'Lorem ipsum', categories: 'Glasses ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Hair & Hats ', percentage: '18%' },
  { title: 'Lorem ipsum', categories: 'Head ', percentage: '78%' },
  { title: 'Lorem ipsum', categories: 'Mouth ', percentage: '46%' },
];

export const accordion_icon_items: AccordionIconItem[] = [
  {
    icon: <IconGoTo />,
    label: 'Lorem ipsum.com',
    url: 'lorem.com',
    secondary: true,
  },
  {
    icon: <IconDiscord />,
    label: 'Lorem ipsum',
    url: 'https://discord.com/',
    secondary: true,
  },
  {
    icon: <IconInstagram />,
    label: 'Lorem ipsum',
    url: 'https://www.instagram.com/',
    secondary: true,
  },
  {
    icon: <IconTwitter />,
    label: 'Lorem ipsum',
    url: 'https://twitter.com/home?lang=en',
  },
];
