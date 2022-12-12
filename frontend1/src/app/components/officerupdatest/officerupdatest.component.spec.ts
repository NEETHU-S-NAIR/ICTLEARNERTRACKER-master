import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerupdatestComponent } from './officerupdatest.component';

describe('OfficerupdatestComponent', () => {
  let component: OfficerupdatestComponent;
  let fixture: ComponentFixture<OfficerupdatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerupdatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerupdatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
