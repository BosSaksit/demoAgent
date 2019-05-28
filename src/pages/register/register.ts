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
  dataUser: FormGroup;
  private submitRequested: boolean;
  data: user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public callapi: CallapiProvider) {
    this.dataUser = this.fb.group({
      'id': [null],
      'name': [null, Validators.required],
      'tel': [null, Validators.required],
      'address': [null, Validators.required],
      'idcard': [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  regis() {
    this.submitRequested = true;
    console.log(this.dataUser.value);
    this.data = this.dataUser.value;
    this.callapi.addUser(this.data).subscribe(data => {
      data.name = this.data.name,
      data.address = this.data.address,
      data.idcard = this.data.idcard,
      data.tel = this.data.tel

      console.log(data);

    });
    // this.navCtrl.pop();
  }

  public isValid(name: string): boolean {
    var ctrl = this.dataUser.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

}
