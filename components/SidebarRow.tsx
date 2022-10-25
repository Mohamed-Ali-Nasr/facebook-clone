import Image from "next/image";
import React, { FC } from "react";

const SidebarRow: FC<{
  Icon?: React.ElementType;
  title: string;
  src?: string;
}> = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          src={src}
          className="rounded-full"
          width={30}
          height={30}
          layout="fixed"
        />
      )}

      {Icon && <Icon className="w-8 h-8 text-blue-500" />}

      <p className="hidden font-medium sm:inline-flex">{title}</p>
    </div>
  );
};

export default SidebarRow;
