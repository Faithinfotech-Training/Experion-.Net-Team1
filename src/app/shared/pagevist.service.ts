import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagevisit } from './pagevist';

@Injectable({
  providedIn: 'root'
})
export class PagevisitService {
  pagevisit: Pagevisit[];
  pageId:number;
  constructor(private httpClient: HttpClient) { }

  bindListPageVisit() {
    this.httpClient.get(environment.apiUrl + "/api/pagevisit/GetPageVisit")
      .toPromise().then(response =>
        this.pagevisit = response as Pagevisit[]
      );
     }
     /*
     UpdatePageCount(pageId): Observable<any> 
     {
       console.log("demo");
     return this.httpClient.put(environment.apiUrl + "/api/pagevisit/UpdatePageVisit?id="+pageId);
    }

     /* Updatedemo(pagename:string){
        this.http.put(environment.apiUrl + "/api/pagevisit/UpdatePageVisit?pageName=" + pagename,null).map(
          (response) => {
            return response;
      }*/
     
}
