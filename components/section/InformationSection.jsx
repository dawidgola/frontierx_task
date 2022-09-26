import { Icon1, Icon2, IconHome } from '@/assets/icons';
import Button from '@/components/global/Button';

const InformationSection = () => (
  <div className="z-[1] flex flex-col items-center mt-[26px]">
    <div className="mb-[60px]">
      <h1 className="text-center font-[800] sm:text-[45px] mb-[6px]">
        Lorem ipsum
      </h1>
      <p className="text-center text-[12px] sm:text-[16px] mb-[6px]">
        Created by:<span className="text-[#FC364C]">Lorem ipsum</span>
      </p>
      <p className="text-center text-[12px] sm:text-[16px]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-between">
      <Button secondary label="Lorem ipsum" icon={<Icon1 />} />
      <Button label="Lorem ipsum" icon={<Icon2 />} />
      <Button secondary label="Lorem ipsum" icon={<IconHome />} />
    </div>
  </div>
);

export default InformationSection;
