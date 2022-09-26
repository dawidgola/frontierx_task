import Image from 'next/image';
import banner from '@/assets/img/banner.png';
import eye from '@/assets/img/eye.png';

const BannerSection = () => (
  <div className="p-2 xl:p-0 xl:mt-[41px] mb-[55px] flex justify-center">
    <div className="relative flex">
      <Image src={banner} alt="banner" />
      <div className="absolute invisible xl:visible m-0 left-[40%] top-[35%] translate-y-1/2 translate-x-1/2">
        <Image src={eye} alt="eye" />
      </div>
    </div>
  </div>
);

export default BannerSection;
