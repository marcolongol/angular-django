import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  starIcon = faStar

  @Input() movie : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
