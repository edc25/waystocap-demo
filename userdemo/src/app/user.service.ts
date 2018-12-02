import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'; //TODO: Think the base url should probably be injected
//import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getUsers(): Observable<User[]>{
    const uri = environment.rootUrl + '/users';
    this.http.get(uri).pipe(map(res =>{console.log(res)}));
    return this.http.get<User[]>(uri).pipe(map(res => { return res; }));
  }

  saveUser(user: User): Observable<any>{
    const uri = environment.rootUrl + '/users';
    return this.http.put(uri,user, this.httpOptions);
  }
}

