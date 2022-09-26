const Button = ({ secondary, icon, label, ...props }) => {
  return (
    <button
      className={`hover:opacity-75 p-[13px_35px] rounded-[5px] m-[2px_10px]  ${
        secondary ? 'black-rgba' : 'bg-[#0D0D0D]'
      }`}
      {...props}
    >
      <div className="flex justify-center items-center">
        <div>{icon}</div>
        <div className="ml-[6px] text-[15px] font-[800]">{label}</div>
      </div>
    </button>
  );
};

export default Button;
