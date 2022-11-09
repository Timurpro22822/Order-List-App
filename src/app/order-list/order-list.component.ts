import { Component, OnInit } from '@angular/core';
import { ORDERS } from './mock-data';
import { IOrderItem } from './order-item';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  items: IOrderItem[] = ORDERS;

  constructor() { }

  done(item: IOrderItem): void {
    item.delivered = true;
  }
}
