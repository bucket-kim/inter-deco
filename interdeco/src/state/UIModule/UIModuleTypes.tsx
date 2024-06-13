export interface UIModuleTypes {
  loggedIn: boolean;
  setLoggiedIn: (loggedIn: boolean) => void;

  newPostShow: boolean;
  setNewPostShow: (newPostShow: boolean) => void;

  episode: number;
  setEpisode: (episode: number) => void;
}
