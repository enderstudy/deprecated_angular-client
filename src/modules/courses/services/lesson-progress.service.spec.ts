import { TestBed } from '@angular/core/testing';

import { LessonProgressService } from './lesson-progress.service';

describe('LessonProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonProgressService = TestBed.get(LessonProgressService);
    expect(service).toBeTruthy();
  });
});
