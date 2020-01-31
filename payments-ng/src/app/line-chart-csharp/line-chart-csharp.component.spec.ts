import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartCsharpComponent } from './line-chart-csharp.component';

describe('LineChartCsharpComponent', () => {
  let component: LineChartCsharpComponent;
  let fixture: ComponentFixture<LineChartCsharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartCsharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartCsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
