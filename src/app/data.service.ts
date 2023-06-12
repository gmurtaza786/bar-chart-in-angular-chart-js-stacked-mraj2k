import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  getSales_MTD() {
    return of([
      {
        label: 'Team',
        yourRank: 84.62,
        total: 100,
      },
      {
        label: 'Site',
        yourRank: 93.55,
        total: 100,
      },
      {
        label: 'Company',
        yourRank: 94.61,
        total: 100,
      },
    ]);
  }

  getSales_lastMonth() {
    return of([
      {
        label: 'Team',
        yourRank: 84.62,
        total: 100,
      },
      {
        label: 'Site',
        yourRank: 87.1,
        total: 100,
      },
      {
        label: 'Company',
        yourRank: 87.33,
        total: 100,
      },
    ]);
  }

  getSales_YTD() {
    return of([
      {
        label: 'Team',
        yourRank: '5',
        total: '5',
      },
      {
        label: 'Site',
        yourRank: '4',
        total: '6',
      },
      {
        label: 'Company',
        yourRank: '3',
        total: '7',
      },
    ]);
  }
}
