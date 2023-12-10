import { type ICatCardProps } from "./CatCard";

const base: ICatCardProps = {
  tag: "Felines",
  title: "What's new in Cats",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sodales nunc.",
  author: "John Doe",
  time: "2 hours ago",
};

// const alt: IBaseTemplate = {
//   sampleTextProp: "Bye World",
// }

export const mockCatCardProps = {
  base,
};
