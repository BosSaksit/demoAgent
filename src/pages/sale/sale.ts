import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallapiProvider } from '../../providers/callapi/callapi';
import { user } from '../../models/user';

/**
 * Generated class for the SalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
})
export class SalePage {
  getid:string;
  userData:user
  // name:string
  // tel:string
  // address:string
  // idcard:string

  constructor(public navCtrl: NavController, public navParams: NavParams,public callapi:CallapiProvider) {
    this.getid = navParams.get('_id');
    console.log(this.getid);
    this.callapi.getUserById(this.getid).subscribe(data =>{
      console.log(data);
      this.userData = data;
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SalePage');
   
  }

}
