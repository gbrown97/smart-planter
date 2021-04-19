import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/plants';

@Injectable({
  providedIn: 'root'
})
export class PlantDatabaseService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain'
    })
  };
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  refresh(): Observable<any>{
    console.log("Subbed");
    return this.http.get(`${baseUrl}` + `/refresh`, this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }



}
