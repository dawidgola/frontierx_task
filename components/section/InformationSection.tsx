import { Icon1, Icon2, IconHome } from '@/assets/icons';
import Button from '@/components/global/Button';

const InformationSection = (): JSX.Element => (
  <div className="z-[1] flex flex-col items-center mt-7">
    <div className="mb-16">
      <h1 className="text-center font-extrabold sm:text-[45px] mb-1.5">
        Lorem ipsum
      </h1>
      <p className="text-center text-xs sm:text-base mb-1.5">
        Created by:<span className="text-[#FC364C] ml-0.5">Lorem ipsum</span>
      </p>
      <p className="text-center text-xs sm:text-base">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-between">
      <Button label="Lorem ipsum" icon={<Icon1 />} />
      <Button label="Lorem ipsum" icon={<Icon2 />} />
      <Button label="Lorem ipsum" icon={<IconHome />} />
    </div>
  </div>
);

export default InformationSection;
