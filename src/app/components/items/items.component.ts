import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item"
import { Title } from '@angular/platform-browser';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit{
  
  items:Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService ) {}

  ngOnInit(): void{
    this.items = this.itemService.getItems();
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
