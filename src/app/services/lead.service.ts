import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private _http: HttpClient) { }

  
  createLead(lead: any){
    return this._http.post<any>(AppConstants.POST_CREAE_LEAD(), lead);
  }

  getAllLeads(){
    return this._http.get<any>(AppConstants.GET_ALL_LEADS());
  }
  getLeadId(id:any){
    return this._http.get<any>(AppConstants.GET_LEADS_BY_ID(id));
  }
}
