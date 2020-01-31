import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNodejsComponent } from './line-chart-nodejs.component';

describe('LineChartNodejsComponent', () => {
  let component: LineChartNodejsComponent;
  let fixture: ComponentFixture<LineChartNodejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartNodejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
