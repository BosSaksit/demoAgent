import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallapiProvider } from '../../providers/callapi/callapi';
import { user } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public getuser:user;

  constructor(public navCtrl: NavController, public callapi:CallapiProvider) {
  
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
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.callapi.getUserAll().subscribe((it) =>{
      console.log(it);
      this.getuser = it;
      console.log(this.getuser);   
    });
  }

}
