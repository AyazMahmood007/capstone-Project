import { AfterViewInit, Component, OnInit } from '@angular/core';
 import * as Highcharts from 'highcharts';


declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

    Highcharts = Highcharts;
     salesDataDate: any = [];
     sale =['date','date','date','date','date','date','date','date',]

  constructor() { }

  ngAfterViewInit(): void {
    this.loadchart();
    this.renderSalesChart();
  }

  ngOnInit(): void {
    this.salesDataDate = []
    // plotting dates for chart
    var j;
    for (j = 0; j < 8; j++) {
      this.salesDataDate.push(this.formatDate(new Date(Date.now() - j * 24 * 60 * 60 * 1000)))
    }
    console.log(this.salesDataDate)

    

  }

  formatDate(date: any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();


    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
}

  navigateToProducts(){
    console.log("please go to products");
  }


  loadchart(){

    var chart1 = Highcharts.chart({
      chart: {
          renderTo: 'stockChart',
          type: 'bar'
      },
      title: {
          text: ' '
      },
      credits: {
        enabled: false
      },
      xAxis: {
        allowDecimals: false,
          categories: ['Product1', 'Product2', 'Product3'],
          
      },
      yAxis: {
          title: {
              text: ' ',
              
          },
          allowDecimals: false
      },
      legend: {
        enabled: false
      },
      series: [{
          name: 'Jane',
          type: 'bar',
          data: [127, 45, 64],
          
      }, ]
  });          
  }



    renderSalesChart(){
      Highcharts.chart({
        chart: {
          renderTo: 'salesChart',
          type: 'basic line'
      },

        title: {
            text: ' '
        },
    
        subtitle: {
            text: ''
        },
        credits: {
          enabled: false
        },
        yAxis: {
            title: {
                text: ''
            },
        },
    
        xAxis: {
          type: 'datetime',
          // dateTimeLabelFormats: {
          //    day: '%d %b %Y'    //ex- 01 Jan 2016
          // }
          categories: this.salesDataDate
          
        },
        legend: {
          enabled: false
        },
    
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },
    
        // plotOptions: {
        //     series: {
        //         label: {
        //             connectorAllowed: false
        //         },
        //         pointStart: 2010
        //     }
        // },
    
        series: [{
            name: 'Sale Per Day',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            type: 'line'
        },
        
        // {
        //     name: 'Manufacturing',
        //     data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        //     type: 'line'
        // }, {
        //     name: 'Sales & Distribution',
        //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        //     type: 'line'
        // }
      ],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
                  
    
    }
  

}
