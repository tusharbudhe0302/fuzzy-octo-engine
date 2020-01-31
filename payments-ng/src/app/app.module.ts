import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartCsharpComponent } from './line-chart-csharp/line-chart-csharp.component';
import { AppService } from "./shared/services/app.servies";
import { LineChartCsharpService } from './line-chart-csharp/line-chart-charp.service';
import { LineChartNodejsComponent } from './line-chart-nodejs/line-chart-nodejs.component';
import { LineCharttNodejsService } from './line-chart-nodejs/line-chart-nodejs.service';

@NgModule({
  declarations: [
    AppComponent,
    LineChartCsharpComponent,
    LineChartNodejsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [AppService, LineChartCsharpService, LineCharttNodejsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
