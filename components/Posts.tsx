import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts: FC<{ posts: DocumentData[] }> = ({ posts }) => {
  const [allPosts, setAllPosts] = useState<DocumentData[]>();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setAllPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {allPosts
        ? allPosts?.map((post) => <Post key={post.id} post={post.data()} />)
        : posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
