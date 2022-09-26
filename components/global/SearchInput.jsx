import React from 'react';

const SearchInput = (props) => (
  <div className="relative shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    <div className="flex absolute inset-y-0 left-0 items-center pl-[19px] pointer-events-none">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7771 14.5396L19.5247 18.2864L18.2866 19.5245L14.5399 15.7769C13.1458 16.8945 11.4118 17.5023 9.625 17.4998C5.278 17.4998 1.75 13.9718 1.75 9.62476C1.75 5.27776 5.278 1.74976 9.625 1.74976C13.972 1.74976 17.5 5.27776 17.5 9.62476C17.5025 11.4115 16.8947 13.1455 15.7771 14.5396ZM14.0219 13.8904C15.1323 12.7484 15.7525 11.2176 15.75 9.62476C15.75 6.24026 13.0086 3.49976 9.625 3.49976C6.2405 3.49976 3.5 6.24026 3.5 9.62476C3.5 13.0084 6.2405 15.7498 9.625 15.7498C11.2179 15.7523 12.7486 15.1321 13.8906 14.0216L14.0219 13.8904Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
    <input
      className="outline-none lg:min-w-[400px] xl:min-w-[657px] text-{13px} font-semibold  p-3 rounded-[10px] bg-[#1F1F1F] pl-14 text-[#A2A2A2]"
      {...props}
    />
  </div>
);

export default SearchInput;
