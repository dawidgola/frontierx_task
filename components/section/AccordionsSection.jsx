import { Icon2 } from '@/assets/icons';
import Accordion from '@/components/global/Accordion';
import AccordionBox from '@/components/global/AccordionBox';
import IconWithUrl from '@/components/global/IconWithUrl';
import { accordion_box_items, accordion_icon_items } from '@/static/index';

const AccordionsSection = () => {
  return (
    <div className="mt-[70px] mb-[12px]">
      <div className="max-w-[1280px] p-[16px] lg:p-0 flex flex-wrap justify-center xl:justify-end gap-y-6 gap-x-5 mr-auto ml-auto">
        <Accordion iconHeader={<Icon2 />} header="Lorem ipsum">
          <div>
            <div className="text-[14px] text-white mb-[42px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </div>
            <div className="flex flex-wrap justify-start gap-y-5 gap-x-5">
              {accordion_icon_items.map((props, index) => (
                <IconWithUrl key={index} {...props} />
              ))}
            </div>
          </div>
        </Accordion>
        <Accordion secondary iconHeader={<Icon2 />} header="Lorem ipsum">
          <div className="flex flex-wrap gap-y-[8px] gap-x-[9px]">
            {accordion_box_items.map((props, index) => (
              <AccordionBox key={index} {...props} />
            ))}
          </div>
        </Accordion>
        <Accordion iconHeader={<Icon2 />} header="Lorem ipsum">
          Lorem ipsum
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionsSection;
