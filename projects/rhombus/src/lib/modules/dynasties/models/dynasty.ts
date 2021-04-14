export interface IDynastyWeek {
  id: string;
  week: number;
  home: boolean;
  opponent: string;
  ourScore: number;
  theirScore: number;
  link: string;
  result: string;
}

export interface IDynastyYear {
  id: string;
  year: number;
  team: string;
  weeks: IDynastyWeek[];
  positionId: string;
}

export interface IDynastyMark {
  id: string;
  version: number;
}

export interface IDynasty {
  id: string;
  name: string;
  description: string;
  gameId: number;
  tags: Array<string>;
  mark: IDynastyMark[];
}
