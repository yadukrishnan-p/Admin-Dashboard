import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pichart',
  templateUrl: './pichart.component.html',
  styleUrls: ['./pichart.component.css']
})
export class PichartComponent {

  Highcharts = Highcharts
chartOptions = {}


constructor(){
  this.chartOptions={

    //give chart configuration data from high chart
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: 'Avarege student admission  2022-2023',
      align: 'left'
  },
  
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
  series: [{
      type: 'pie',
      name: 'Share',
      data: [
          ['MEARN', 23],
          ['PYTHON', 12],
    
          ['ASP.NET', 8],
          ['TESTING', 20],
          ['FLUTTER', 7],
          ['BIG DATA',30]
      ]
  }]
  }
}

}
