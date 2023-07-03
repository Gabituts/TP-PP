import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
    {
      id: 0,
      title: "pera",
      price: 10.5,
      quantity: 5,
      completed: false,
    },
    {
      id: 1,
      title: "naranja",
      price: 15,
      quantity: 2,
      completed: true,
    }];

  constructor() { }

  getItems(){
    return this.items
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
