import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';

import { IWorldBank } from '../shared/interface/IWorldBank';
import { LineChartCsharpService } from './line-chart-charp.service';

type chartDataSet = ChartDataSets;

@Component({
  selector: 'app-line-chart-csharp',
  templateUrl: './line-chart-csharp.component.html',
  styleUrls: ['./line-chart-csharp.component.css']
})
export class LineChartCsharpComponent implements OnInit {
  worldBankReports: IWorldBank[];
  worldBankReport: IWorldBank;
  show: boolean = true;
  coutryNameList = new Array();
  coutryRevenueList = new Array();
  lineChartData: chartDataSet[];
  lineChartLabels: Label[] = [];
  lineChartOptions: any;
  lineChartLegend: boolean = false;
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#0066FF',
    },
  ];
  lineChartType = 'line';
  constructor(private lineChartCsharpService: LineChartCsharpService) { }

  ngOnInit() {
    this.lineChartCsharpService.getWorldBankReport().subscribe((res) => {
      // console.log(`Yess....`);
      // console.log(res);
      this.worldBankReports = res;
      this.worldBankReports.map((wb) => {
        this.coutryRevenueList.push(wb.Expenditures);
        this.coutryNameList.push(wb.Country);
        console.log(`mapping in progress..`);
      });

      this.lineChartData = [
        { data: this.coutryRevenueList, label: 'World Bank Revenue Report' },
      ];
      this.lineChartLabels = this.coutryNameList;
      this.lineChartOptions = {
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Revenue'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Country'
            }
          }]
        }
        // responsive: true,
      };
      this.lineChartLegend = true;
      this.show = true;
      console.log(`mapping in done..`);
    });
  }





}
