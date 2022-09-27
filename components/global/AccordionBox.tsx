type AccordionBoxProps = {
  title: string;
  categories: string;
  percentage: string;
};

const AccordionBox = ({
  title,
  categories,
  percentage,
}: AccordionBoxProps): JSX.Element => (
  <div className="flex flex-col items-center p-[15px_26px] bg-pattern-gray5 w-[165px] rounded-[5px] border-2 border-solid border-[#0D0D0D] hover:border-[#FC364C]">
    <div className="text-pattern-light-gray text-sm">{categories}</div>
    <div className="text-[17px] font-extrabold">{title}</div>
    <div className="text-pattern-light-gray text-sm">{percentage}</div>
  </div>
);

export default AccordionBox;
