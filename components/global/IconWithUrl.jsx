import Link from 'next/link';

const IconWithUrl = ({ icon, url, secondary, label }) => (
  <div className="flex items-center">
    <div className="flex w-[30px] h-[30px] items-center justify-center">
      {icon}
    </div>
    <div
      className={`ml-[17px] text-[14px] min-w-[120px] ${
        secondary ? 'text-[#FC364C]' : 'text-white'
      }`}
    >
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </div>
  </div>
);

export default IconWithUrl;
