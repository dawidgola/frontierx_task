// @ts-ignore
import Tooltip from 'react-simple-tooltip';
import { CSSTransition } from 'react-transition-group';
import { IconArrow, IconQuestion } from '@/assets/icons';
import { useState, useRef } from 'react';

type AccordionProps = {
  iconHeader: React.ReactNode;
  header: string;
  secondary?: boolean;
  children: JSX.Element | JSX.Element[] | string;
};

const Accordion = ({
  iconHeader,
  header,
  secondary,
  children,
}: AccordionProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const nodeRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full h-fit lg:max-w-[591px] bg-pattern-black p-7 rounded">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2.5">{iconHeader}</div>
          <div className="text-base font-extrabold text-white flex items-center">
            {header}
            {secondary && (
              <div className="ml-1.5 flex items-center">
                <Tooltip
                  content="tooltip"
                  placement="right"
                  background="#0D0D0D"
                  radius="5"
                >
                  <IconQuestion />
                </Tooltip>
              </div>
            )}
          </div>
        </div>
        <div className={`duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}>
          <IconArrow />
        </div>
      </div>

      <CSSTransition
        in={open}
        nodeRef={nodeRef}
        timeout={350}
        unmountOnExit
        appear
        className="mt-5 mb-12 max-h-[316px] overflow-y-auto scrollbar-custom"
        classNames="transition"
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Accordion;
