const AccordionBox = ({ title, categories, percentage }) => (
  <div className="flex flex-col items-center p-[15px_26px] bg-[#0D0D0D] w-[165px] rounded-[5px] border-2 border-solid border-[#0D0D0D] hover:border-[#FC364C]">
    <div className="text-[#8E8B8F] text-[13px]">{categories}</div>
    <div className="text-[17px] font-[800] text-[#F6F6F6]">{title}</div>
    <div className="text-[#8E8B8F] text-[13px]">{percentage}</div>
  </div>
);

export default AccordionBox;
