import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagevisitService } from '../shared/pagevist.service';
//import { Label } from 'ng2-charts';
//import { Chart, ChartDataset, ChartOptions, ChartType, Ticks } from 'node_modules/chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  /*public barChartlabels:Label[]=['2006','2007','2008','2009','2010','2011','2012'];

  public barChartType:ChartType='bar';
  public barChartLegend=true;
  public barChartPlugins=[pluginDataLabels];

  //datasets
  public barChartData:ChartDataset[]= [
    {data:[66,54,35,63,34,45,56],label:"serie4 A"},
    {data:[61,54,15,63,34,45,26],label:"serie4 B"}
  ];

  public barChartOptions:ChartOptions={
    responsive:true,
    //scales:{ xAxes:[{}]? , yAxes :[{}]? },
    plugins:{
      datalabels:{
        anchor:'end',
        align:'end'
      }
    }
  };*/

  

  constructor(public pageService:PagevisitService,private router :Router) { }

  ngOnInit(): void {
    /*
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });*/
  this.pageService.bindListPageVisit();
    
  }

}
