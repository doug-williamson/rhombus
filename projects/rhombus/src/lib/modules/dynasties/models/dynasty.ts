export interface IDynastyWeek {
  week: number;
  home: boolean;
  opponent: string;
  ourScore: number;
  theirScore: number;
  link: string;
  result: string;
  description: string;
}

export interface IDynastyYear {
  id: string;
  year: number;
  team: string;
  weeks: IDynastyWeek[];
  positionId: number;
}

export interface IDynastyMark {
  id: string;
  version: number;
  name: string;
}

export interface IDynasty {
  id: string;
  name: string;
  description: string;
  gameId: number;
  tags: Array<string>;
  mark: IDynastyMark[];
}
