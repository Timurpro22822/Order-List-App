import { Component, OnInit } from '@angular/core';
import { ORDERS } from './mock-data';
import { IOrderItem } from './order-item';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  currentItem: IOrderItem = {
    name : "",
    price : 0,
    date : new Date(),
    delivered : false
  }
  items: IOrderItem[] = ORDERS;

  constructor() { }

  create(): void {
    console.log("Created!");

    this.items.push({ ...this.currentItem })
  }

  done(item: IOrderItem): void {
    item.delivered = true;
  }
}
