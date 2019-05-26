import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../models/user';

/*
  Generated class for the CallapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallapiProvider {

  public static host:string = "https://localhost:5001/api/";

  constructor(public http: HttpClient) {
    console.log('Hello CallapiProvider Provider');
  }

  public getUserAll(){
    return this.http.get<user>(CallapiProvider.host + 'User/GetAll');
  }

}
