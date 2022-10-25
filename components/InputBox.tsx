import { useSession } from "next-auth/react";
import Image from "next/image";
import React, {
  BaseSyntheticEvent,
  ChangeEventHandler,
  EventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const InputBox = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [imageToPost, setImageToPost] = useState<string | null>(null);
  const filePickerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const sendPost: MouseEventHandler = async (e) => {
    e.preventDefault();
    if (!input) return;

    const docRef = await addDoc(collection(db, "posts"), {
      name: session?.user.name,
      email: session?.user.email,
      image: session?.user.image,
      message: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (imageToPost) {
      await uploadString(imageRef, imageToPost, "data_url").then(async () => {
        const downLoadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          postImage: downLoadUrl,
        });
      });
    }
    setImageToPost(null);
    setInput("");
  };

  const addImageToPost: ChangeEventHandler = (e: BaseSyntheticEvent) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target?.result as string);
    };
  };

  return (
    <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
      <div className="flex items-center p-4 space-x-4">
        <Image
          src={session?.user.image!}
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full "
        />
        <form className="flex flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session?.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={() => setImageToPost(null)}
            className="flex flex-col transition duration-150 transform cursor-pointer filter hover:brightness-110 hover:scale-105"
          >
            <img className="object-contain h-10" src={imageToPost} alt="" />
            <p className="text-xs text-center text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex p-3 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="text-green-400 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="hidden inputIcon sm:inline-flex">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
