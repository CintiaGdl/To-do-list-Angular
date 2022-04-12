import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _list: string[] = []

  get list() {
    return [...this._list]
  }

  addItem(query: string) {
    this._list.push(query);
    console.log(this._list)
  }

  constructor( ) { }


}
