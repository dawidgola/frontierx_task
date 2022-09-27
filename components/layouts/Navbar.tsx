import Link from 'next/link';
import { Logo } from '@/assets/icons';
import SearchInput from '@/components/global/SearchInput';
import { menu_item } from '@/static/index';
import { ChangeEvent, useState } from 'react';
import Container from '@/components/global/Container';

const Navbar = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between content-center p-4 lg:p-6 lg:pr-10 lg:pl-10 lg:items-center z-[3]">
        <div className="p-5 lg:p-0">
          <Logo />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between content-center items-center">
          <div className="p-5 lg:p-0">
            <SearchInput
              placeholder="Lorem ipsum"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div className="p-5 lg:p-0">
            <ul className="flex">
              {menu_item.map(({ name, url, id }) => (
                <li key={id} className="p-1.5 lg:pl-10 hover:text-pattern-gray">
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
