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

  public static host: string = "https://localhost:5001/api/";

  constructor(public http: HttpClient) {
    console.log('Hello CallapiProvider Provider');
  }

  public getUserAll() {
    return this.http.get<user>(CallapiProvider.host + 'User/GetAll');
  }
  public addUser(data) {
    console.log(data);
    return this.http.post<user>(CallapiProvider.host + 'User/AddUser', data );
  }
  public editUser(userId: string, data){
    return this.http.put<user>(CallapiProvider.host + 'User/EditUser/' + userId, data);
  }
  public getUserById(userId: string){
    return this.http.get<user>(CallapiProvider.host + 'User/GetbyId/'+ userId);
  }

}
