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
        completed: false,
      }
    ];
  }

}
