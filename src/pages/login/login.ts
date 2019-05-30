import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoRegis(){
    this.navCtrl.push('RegisterPage');
  }

  loadingPage(){
    let load = this.loading.create({
      content: 'Please wait...'
    });
  
    load.present();
  
    setTimeout(() => {
       load.dismiss();
    }, 3000); 
  
  }

  login(){
   this.loadingPage();
    this.navCtrl.push(HomePage);
  }

}
