import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  alertMe(val)          //We are calling alert function from home.html//
  {
    alert(val);
  }

  ngOnInit() {
  }

  model = new Order();
  addOrder() {
    this.orderService.addOrder(this.model)
      .subscribe()
    console.log(" Order submitted")

  }
}