import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAreaWeekComponent } from './balance-area-week.component';

describe('BalanceAreaWeekComponent', () => {
  let component: BalanceAreaWeekComponent;
  let fixture: ComponentFixture<BalanceAreaWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceAreaWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAreaWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
