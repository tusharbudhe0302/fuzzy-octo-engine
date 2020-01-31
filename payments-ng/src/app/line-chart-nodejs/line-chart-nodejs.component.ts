import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';

import { LineCharttNodejsService } from './line-chart-nodejs.service';
import { IWorldBank } from '../shared/interface/IWorldBank';
type chartDataSet = ChartDataSets;
@Component({
  selector: 'app-line-chart-nodejs',
  templateUrl: './line-chart-nodejs.component.html',
  styleUrls: ['./line-chart-nodejs.component.css']
})
export class LineChartNodejsComponent implements OnInit {

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
      backgroundColor: '#009900',
    },
  ];
  lineChartType = 'line';
  constructor(private lineCharttNodejsService: LineCharttNodejsService) { }

  ngOnInit() {
    this.lineCharttNodejsService.getWorldBankReport().subscribe((res) => {
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
