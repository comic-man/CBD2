import { Component, OnInit } from '@angular/core';
import { SuperHero } from './comics';

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.scss']
})
export class ComicInfoComponent implements OnInit {

  activeSuperHero!: SuperHero;



  constructor() { }

  ngOnInit(): void {
  }

}
