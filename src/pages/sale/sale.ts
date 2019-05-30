import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallapiProvider } from '../../providers/callapi/callapi';
import { user } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  userData:FormGroup
  user:user;
  private submitRequested: boolean;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public callapi:CallapiProvider, public fb:FormBuilder) {
    this.getid = navParams.get('_id');
    console.log(this.getid);
    this.callapi.getUserById(this.getid).subscribe(data =>{
      this.user = data;
      console.log(this.user); 
      if (data != null) {
        this.userData.patchValue(data);
      }
    });
    this.userData = this.fb.group({
      'id': [null],
      'name': [null, Validators.required],
      'tel': [null, Validators.required],
      'address': [null, Validators.required],
      'idcard': [null, Validators.required]
    });
    console.log(this.userData.value);
    
  }
  
  public isValid(name: string): boolean {
    var ctrl = this.userData.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SalePage');
   
  }
  editdata(){
    console.log(this.userData.value);
    this.callapi.editUser(this.user.id,this.userData.value).subscribe(it =>{
      console.log(it);
    });
    this.navCtrl.pop();
  }

}
