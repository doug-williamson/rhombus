import { Injectable } from '@angular/core';

export interface Game {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  _games: Game[] = [
    {
      id: 1,
      name: 'NCAA Football 14',
    },
  ];

  constructor() { }

  games() {
    return this._games;
  }
}
