import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item"
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit{
  
  items: Item[] = [];
  total: number = 0;

  constructor() {}
  ngOnInit(): void{
    this.items = [
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
      }
    ];
  this.calTotal();
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id)
    this.calTotal();
  }

  toggleItem(item: Item){
    this.calTotal();
  }

  calTotal(){
    this.total = this.items
    .filter(item => !item.completed)
    .map(item => item.quantity * item.price)
    .reduce((acum, item) => acum += item, 0);
  }

}
