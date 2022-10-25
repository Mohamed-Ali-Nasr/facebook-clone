import Image from "next/image";
import React, { FC } from "react";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2">
        <Image
          src={session?.user.image!}
          width="40"
          height="40"
          layout="fixed"
          className="rounded-full cursor-pointer"
          onClick={() => signOut()}
        />
        <p className="hidden pr-3 font-semibold lg:inline-flex whitespace-nowrap">
          {session?.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
