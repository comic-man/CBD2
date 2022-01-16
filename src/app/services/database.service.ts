import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  comics: ReplaySubject<Comic[]> = new ReplaySubject(1);
  teamsURL = 'https://vizteams-api.herokuapp.com/teams';
  membersURL = 'https://vizteams-api.herokuapp.com/members'

  constructor() { }
}
