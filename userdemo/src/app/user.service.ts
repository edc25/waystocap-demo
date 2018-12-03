import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'; //TODO: Think the base url should probably be injected
//import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Observable, of, combineLatest } from 'rxjs';
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
    return this.http.get<User[]>(uri).pipe(map(res => { 
      res.forEach(u => {u.avatarUrl = uri + '/' + u._id+'/avatar'; u.isDirty = false;});
      return res; 
    }));
  }

  saveUser(user: User): Observable<any>{
    if (user._id)
    {
      const uri = environment.rootUrl + '/users/' + user._id;
      //TODO: don't send duplicate data
      return this.http.put(uri, user, this.httpOptions);
    }
    else{
      const uri = environment.rootUrl + '/users';
      return this.http.post(uri, user, this.httpOptions);
    }
  }

  saveUsers(users: User[]): Observable<any>{
    return combineLatest(users.filter((u) => u.isDirty).map((u) => this.saveUser(u)));
  }
}

