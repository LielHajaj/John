import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSaleComponent } from './random-sale.component';

describe('RandomSaleComponent', () => {
  let component: RandomSaleComponent;
  let fixture: ComponentFixture<RandomSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
