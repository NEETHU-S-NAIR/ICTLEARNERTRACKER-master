import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineraddstComponent } from './traineraddst.component';

describe('TraineraddstComponent', () => {
  let component: TraineraddstComponent;
  let fixture: ComponentFixture<TraineraddstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineraddstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineraddstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
