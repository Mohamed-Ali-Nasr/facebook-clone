import React, { FC } from "react";

const HeaderIcon: FC<{ Icon: React.ElementType; active?: boolean }> = ({
  Icon,
  active,
}) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 mx-auto text-center text-gray-500 group-hover:text-blue-500 sm:h-7 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
