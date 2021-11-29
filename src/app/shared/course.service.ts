import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //create an instance of course
  formData:Course=new Course();
  
  courses: Course[];


  constructor(private httpClient: HttpClient) { }



  //insert Course
  insertCourse(course:Course):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/course/AddCourse",course)
  }

  //update Course
  updateCourse(course:Course):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/course/UpdateCourse",course)
  }


//display Course
  bindListCourses(){
    this.httpClient.get(environment.apiUrl+"/api/course/GetCourses")
    .toPromise().then(response=>
      this.courses=response as Course[]);

    
  }

  //get a paticular employee
  getCourse(corId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/course/GetCourseById?id="+corId)
  }
}
