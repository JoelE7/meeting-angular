import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filters:any[] = []

  constructor() { }

  getFilters(){
    return this.filters;
  }

  setFilters(filters:any){
    this.filters = filters;
  }
}
