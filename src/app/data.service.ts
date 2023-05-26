import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  getSales_MTD() {
    return of([
      {
        label: 'Team',
        yourRank: '8',
        total: '2',
      },
      {
        label: 'Site',
        yourRank: '7',
        total: '3',
      },
      {
        label: 'Company',
        yourRank: '5',
        total: '5',
      },
    ]);
  }

  getSales_lastMonth() {
    return of([
      {
        label: 'Team',
        yourRank: '7',
        total: '3',
      },
      {
        label: 'Site',
        yourRank: '6',
        total: '4',
      },
      {
        label: 'Company',
        yourRank: '4.5',
        total: '5.5',
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
