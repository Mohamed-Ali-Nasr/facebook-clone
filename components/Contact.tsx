import Image from "next/image";
import React, { FC } from "react";

const Contact: FC<{ name: string; src: string }> = ({ name, src }) => {
  return (
    <div className="relative flex items-center p-2 mb-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-xl">
      <Image
        src={src!}
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
        className="rounded-full"
      />
      <p>{name}</p>

      <div className="absolute w-3 h-3 bg-[#00a400] rounded-full bottom-2 left-7" />
    </div>
  );
};

export default Contact;
