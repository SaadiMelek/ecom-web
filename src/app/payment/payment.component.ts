import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentAmount:number;
  public currentOrder:Order;
  public mode=1;
  public panelStyle='panel';
  constructor(public router:Router, public route:ActivatedRoute,
    public orderService:OrderService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.orderID
    this.orderService.getOrder(id).subscribe(data=>{
      this.currentOrder=data;
    },err=>{
      console.log(err);
    })
  }

  onPayOrder(data) {
    console.log(data);
  }

  onOrder() {
    console.log('onOrder');
  }
}