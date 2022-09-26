type ButtonProps = {
  label: string;
  icon: React.ReactNode;
};

const Button = ({ icon, label, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className="px-9 py-3.5 rounded-[5px] my-0.5 mx-2.5 hover:bg-[#0D0D0D] bg-pattern-black"
      {...props}
    >
      <div className="flex justify-center items-center">
        <div>{icon}</div>
        <div className="ml-1.5 text-[15px] font-extrabold">{label}</div>
      </div>
    </button>
  );
};

export default Button;
