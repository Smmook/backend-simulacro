export type CharacterType = {
  id: string;
  name: string;
  episode: EpisodeType[];
};

export type EpisodeType = {
  id: string;
  name: string;
  characters: CharacterType[];
};
