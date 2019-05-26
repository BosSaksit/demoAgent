import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallapiProvider } from '../../providers/callapi/callapi';
import { Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  dataUser:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public callapi:CallapiProvider) {
    this.dataUser = this.fb.group({
      'name':[null,Validators.required],
      'tel':[null,Validators.required],
      'address':[null,Validators.required],
      'idcard':[null,Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  regis(){
    console.log(this.dataUser.value);
    
    // this.navCtrl.pop();
  }

}
