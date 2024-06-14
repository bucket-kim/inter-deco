export interface UIModuleTypes {
  loggedIn: boolean;
  setLoggiedIn: (loggedIn: boolean) => void;

  newPostShow: boolean;
  setNewPostShow: (newPostShow: boolean) => void;

  episode: string;
  setEpisode: (episode: string) => void;
}
