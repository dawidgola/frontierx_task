import { IconArrow, IconQuestion } from '@/assets/icons';
import { useState } from 'react';

const Accordion = ({ iconHeader, header, secondary, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full lg:max-w-[591px] black-rgba p-[30px] rounded-[4px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2.5">{iconHeader}</div>
          <div className="text-[16px] font-[800] text-white flex items-center">
            {header}
            {secondary && (
              <div className="ml-[6px]">
                <IconQuestion />
              </div>
            )}
          </div>
        </div>
        <div className={`duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}>
          <IconArrow />
        </div>
      </div>
      {open && (
        <div className="mt-[20px] mb-[48px] max-h-[316px] overflow-y-auto scrollbar-custom">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
