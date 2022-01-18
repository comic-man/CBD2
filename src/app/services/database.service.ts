import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { SuperHero } from '../comic-info/comics';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  comics: ReplaySubject<SuperHero[]> = new ReplaySubject(1);
  teamsURL = '';
  membersURL = '';

  constructor() { }
}
