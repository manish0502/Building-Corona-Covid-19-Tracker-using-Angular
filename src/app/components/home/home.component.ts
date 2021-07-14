import { DataFetchService } from './../../services/data-fetch.service';
import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from '../../models/global-data';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];


  constructor(private fetchService:DataFetchService) { }

  



  ngOnInit(): void {
    this.fetchService.getGlobalData().subscribe({
      next:(result)=>{
        console.log(result);
        result.forEach(cs => {
          if (!Number.isNaN(cs.confirmed)) {
            this.totalActive += cs.active
            this.totalConfirmed += cs.confirmed
            this.totalDeaths += cs.deaths
            this.totalRecovered += cs.active
          }

        })
      },
      complete : ()=>{
        this.loading = false;
      }
    });
  }
  
  
  

}
