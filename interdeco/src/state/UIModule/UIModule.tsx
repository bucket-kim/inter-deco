import { globalStateApiType } from "../GlobalStateTypes";

const UIModule = ({ set }: globalStateApiType) => {
  return {
    loggedIn: false,
    setLoggiedIn: (loggedIn: boolean) => {
      set({ loggedIn: loggedIn });
    },

    newPostShow: false,
    setNewPostShow: (newPostShow: boolean) => {
      set({ newPostShow: newPostShow });
    },

    episode: 1,
    setEpisode: (episode: number) => {
      set({ episode: episode });
    },
  };
};

export { UIModule };
