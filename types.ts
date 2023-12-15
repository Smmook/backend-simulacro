export type Character = {
  id: string;
  name: string;
  episodes: Episode[];
};

export type Episode = {
  id: string;
  name: string;
  characters: Character[];
};
