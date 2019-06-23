import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service'
import { Order } from '../order'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    public orderService: OrderService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  order: Order;
  getOrder() {
    var id = this.route.snapshot.params['id'];
    this.orderService.getOrder(id)
      .subscribe((order: any) => {
        this.order = order;
      })
  }
}