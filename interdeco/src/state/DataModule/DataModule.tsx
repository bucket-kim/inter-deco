import { globalStateApiType } from "../GlobalStateTypes";
import { PostType } from "./DataModuleTypes";

const DataModule = ({ set }: globalStateApiType) => {
  return {
    posts: [],
    setPosts: (posts: PostType[]) => {
      set({ posts: posts });
    },

    blogId: "",
    setBlogId: (blogId: string) => {
      set({ blogId: blogId });
    },
  };
};

export { DataModule };
