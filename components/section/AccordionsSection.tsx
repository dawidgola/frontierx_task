import { Icon2 } from '@/assets/icons';
import Accordion from '@/components/global/Accordion';
import AccordionBox from '@/components/global/AccordionBox';
import IconWithUrl from '@/components/global/IconWithUrl';
import { accordion_box_items, accordion_icon_items } from '@/static/index';

const AccordionsSection = (): JSX.Element => {
  return (
    <div className="mt-16 mb-3">
      <div className="p-4 lg:p-0 flex flex-wrap justify-center xl:justify-center gap-y-6 gap-x-5 mr-auto ml-auto">
        <Accordion iconHeader={<Icon2 />} header="Lorem ipsum">
          <div>
            <div className="text-sm text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </div>
            <div className="flex flex-wrap justify-start gap-y-5 gap-x-5">
              {accordion_icon_items.map((props) => (
                <IconWithUrl key={props.id} {...props} />
              ))}
            </div>
          </div>
        </Accordion>
        <div className="flex flex-col justify-start gap-6 lg:max-w-[591px] w-full">
          <Accordion secondary iconHeader={<Icon2 />} header="Lorem ipsum">
            <div className="flex flex-wrap gap-y-2 gap-x-2">
              {accordion_box_items.map((props) => (
                <AccordionBox key={props.id} {...props} />
              ))}
            </div>
          </Accordion>
          <Accordion iconHeader={<Icon2 />} header="Lorem ipsum">
            Lorem ipsum
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionsSection;
