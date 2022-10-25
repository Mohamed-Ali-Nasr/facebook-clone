import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    id: 1,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile:
      "/images/ssssangha_134761954_188099713008324_3137571683369053547_n.jpg",
  },
  {
    id: 2,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 5,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center mx-auto space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
