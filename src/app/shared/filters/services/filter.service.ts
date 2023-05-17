import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filters: any[] = [];

  constructor() {}

  getFilters() {
    return this.filters;
  }

  setFilters(filters: any) {
    this.filters = filters;
  }

  getFiltersForPost(query: any = {}, filtersAccept: any[] = []) {
    let queryBuild = {};
    query.forEach((q) => {
      if (filtersAccept.find((element) => element === q.col)) {
        queryBuild[q.col] = q.value;
      }
    });
    return queryBuild;
  }

  getFiltersForGet(query: any = [], filtersAccept: any[] = []) {
    let queryBuild = '';

    query.forEach((q) => {
      if (filtersAccept.find((element) => element === q.col)) {
        queryBuild = queryBuild + q.col + '=' + q.value;
      }
    });

    return queryBuild;
  }
}
