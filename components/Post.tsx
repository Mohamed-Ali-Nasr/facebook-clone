import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React, { FC } from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post: FC<{ post: DocumentData }> = ({ post }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white shadow-sm rounded-t-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={post.image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{post.name}</p>
            {post.timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(post.timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4">{post.message}</p>
      </div>
      {post.postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={post.postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* footer of the post */}
      <div className="flex items-center justify-between text-gray-400 bg-white border-t shadow-md rounded-b-xl">
        <div className="rounded-none inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="rounded-none inputIcon">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="rounded-none inputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
