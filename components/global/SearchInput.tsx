import { IconSearch } from '@/assets/icons';
import React, { ChangeEvent } from 'react';

IconSearch;

type SearchInputProps = {
  type?: string;
  value: string | number;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  type,
  value,
  required,
  placeholder,
  disabled,
  onChange,
}: SearchInputProps): JSX.Element => (
  <div className="relative shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
      <IconSearch />
    </div>
    <input
      className=" lg:min-w-[400px] xl:min-w-[657px] text-{13px} font-semibold  p-3 rounded-[10px] bg-[#1F1F1F] pl-14 text-[#A2A2A2]"
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default SearchInput;
