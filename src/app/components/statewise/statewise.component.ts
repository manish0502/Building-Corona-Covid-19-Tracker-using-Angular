import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {
  lat:number = 25.096073;
  lng:number = 85.313118;


  constructor() { }

  ngOnInit(): void {
  }
  onLocation(event){
    console.log(event)
    // this.lat =event.coords.lat
    // this.lat=event.coords.lng
  }
}
