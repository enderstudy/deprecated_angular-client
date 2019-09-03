import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookNoteFormComponent } from './notebook-note-form.component';

describe('NotebookNoteFormComponent', () => {
  let component: NotebookNoteFormComponent;
  let fixture: ComponentFixture<NotebookNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookNoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
