import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service'
import { Order } from '../order'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    public orderService: OrderService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  model = new Order();
  id = this.route.snapshot.params['id'];

  getOrder() {
    this.orderService.getOrder(this.id)
      .subscribe((order: any) => {
        this.model = order;
      })
  }

  updateOrder() {
    this.orderService.updateOrder(this.id, this.model)
      .subscribe(() => this.goBack())
  }

  goBack() {
    this.router.navigate(['/details'])
  }
}