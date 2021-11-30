import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cenquiry} from './cenquiry';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CenquiryService {

  //create an instance
  formData: Cenquiry = new Cenquiry();
  cenquiries: Cenquiry[];

  constructor(private httpClient: HttpClient) { }

  
  //binding course enquiry data to get
  bindListCEnquiry()
  {
    this.httpClient.get(environment.apiUrl+"/api/enquiry/GetCourseEnquiry")
    .toPromise().then(response=>
      this.cenquiries=response as Cenquiry[]);
  }
  //insert
  insertCEnquiry(cenquiry: Cenquiry): Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/Enquiry/AddCourseEnquiry",cenquiry);
  }
  //update
  updateCEnquiry(cenquiry:Cenquiry):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+ "/api/Enquiry/UpdateCourseEnquiry",cenquiry);
  }
  //get a particular course enquiry
  getCEnquiry(CEnquiryId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/Enquiry/GetCEnquiryById?id="+CEnquiryId);
  }
  
}
