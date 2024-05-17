import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorPagePage } from './calculator-page.page';

describe('CalculatorPagePage', () => {
  let component: CalculatorPagePage;
  let fixture: ComponentFixture<CalculatorPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
