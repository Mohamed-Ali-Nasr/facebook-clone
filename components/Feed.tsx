import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed: FC<{ posts: DocumentData[] }> = ({ posts }) => {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
