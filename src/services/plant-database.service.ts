import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, timer } from 'rxjs';
import { delay, map, mergeMap, repeat, retry, share, switchMap, takeUntil, tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/plants';

@Injectable({
  providedIn: 'root'
})
export class PlantDatabaseService {

  public plantData$: Observable<any>;
  private stopPolling = new Subject();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain'
    })
  };
  
  constructor(private http: HttpClient) {

    this.plantData$ = timer(1, 5000).pipe(
      switchMap(() => this.http.get(`${baseUrl}` + `/refresh`, this.httpOptions)),
      retry(),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling)
    );
    
    this.plantData$.subscribe();

   }

   ngOnDestroy(){
     this.stopPolling.next();
   }

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
    return this.plantData$.pipe(   
      tap(() => console.log('data sent to subscriber'))
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }



}
