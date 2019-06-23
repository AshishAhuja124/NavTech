import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  alertMe(val) {
    alert(val);

  }

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }
  model: Order;
  getOrders() {
    this.orderService.getOrders()
      .subscribe((model: any) => {
        this.model = model;
        console.log('Order Deleted');
      })
  }
  deleteOrder(id) {
    this.orderService.deleteOrder(id)
      .subscribe(() => {
        this.getOrders();
      });
  }
}