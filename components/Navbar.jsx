import Link from 'next/link';
import { Logo } from '@/assets/icons';
import SearchInput from '@/components/global/SearchInput';
import { menu_item } from '@/static/index';

const Navbar = () => (
  <div className="wrapper flex flex-col lg:flex-row items-center lg:justify-between content-center p-[16px] lg:p-[25px] lg:pr-[40px] lg:pl-[40px] lg:items-center z-[3]">
    <Link href="/">
      <div className="p-5 lg:p-0">
        <Logo />
      </div>
    </Link>
    <div className="flex flex-col lg:flex-row lg:justify-between content-center items-center">
      <div className="p-5 lg:p-0">
        <SearchInput placeholder="Lorem ipsum" />
      </div>
      <div className="p-5 lg:p-0">
        <ul className="flex">
          {menu_item.map(({ name, url }) => (
            <li
              key={name}
              className="p-[5px] lg:pl-[40px] hover:text-[#A2A2A2]"
            >
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
