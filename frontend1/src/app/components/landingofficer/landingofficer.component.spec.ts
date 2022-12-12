import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingofficerComponent } from './landingofficer.component';

describe('LandingofficerComponent', () => {
  let component: LandingofficerComponent;
  let fixture: ComponentFixture<LandingofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingofficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
