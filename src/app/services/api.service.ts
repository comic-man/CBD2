import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  constructor(private httpclient: HttpClient) { }
  getcomics(): Observable<any> {
    return this.httpclient.get("https://superheroapi.com/api/10103449285805871");

  }

}
