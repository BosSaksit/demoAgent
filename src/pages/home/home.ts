import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallapiProvider } from '../../providers/callapi/callapi';
import { user } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public getuser: user;

  constructor(public navCtrl: NavController, public callapi: CallapiProvider) {

  }
  public toList() {
    this.navCtrl.push('ListPage');
  }

  public toSale(id: string) {
    console.log(id);
    this.navCtrl.push('SalePage', { _id: id });
  }
  public delete(id: string) {
    this.callapi.deleteUser(id).subscribe(it => {
      console.log("delete success");
    });
    this.getAllUser();
  }

  public toOrder() {
    this.navCtrl.push('OrderPage');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.getAllUser();
  }
  public getAllUser() {
    this.callapi.getUserAll().subscribe((it) => {
      console.log(it);
      this.getuser = it;
      console.log(this.getuser);
    });
  }

}
