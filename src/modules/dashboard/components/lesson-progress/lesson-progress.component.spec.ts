import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonProgressComponent } from './lesson-progress.component';

describe('LessonProgressComponent', () => {
  let component: LessonProgressComponent;
  let fixture: ComponentFixture<LessonProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
