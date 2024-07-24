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

    episode: "",
    setEpisode: (episode: string) => {
      set({ episode: episode });
    },

    loginButton: false,
    setLoginButton: (loginButton: boolean) => {
      set({ loginButton: loginButton });
    },
  };
};

export { UIModule };
