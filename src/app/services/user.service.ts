import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _http: HttpClient) { }

  // getAllLocalizations(){
  //  return this._http.get<any>(AppConstants.GET_ALL_LOCALIZATIONS());
  // }

  doLogin(userAccount: any){
    return this._http.post<any>(AppConstants.POST_DO_LOGIN(), userAccount);
  }
  checkOtp(otp:any){
    return this._http.post<any>(AppConstants.DO_CHECK_OTP(), otp);
  }
}
