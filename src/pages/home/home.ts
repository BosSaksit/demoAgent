import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  toList(){
    this.navCtrl.push('ListPage');
  }

  toSale(){
    this.navCtrl.push('SalePage');
  }

  toOrder(){
    this.navCtrl.push('OrderPage');
  }

}
