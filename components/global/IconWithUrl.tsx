import Link from 'next/link';

type IconWithUrlProps = {
  key?: number;
  url: string;
  secondary?: boolean;
  icon: React.ReactNode;
  label: string;
};

const IconWithUrl = ({
  icon,
  url,
  secondary,
  label,
}: IconWithUrlProps): JSX.Element => (
  <div className="flex items-center">
    <div className="flex w-8 h-8 items-center justify-center">{icon}</div>
    <div
      className={`ml-4 text-sm min-w-[120px] ${
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
