import { Component, OnInit } from '@angular/core';
import { LessonProgressService } from '../../../courses/services/lesson-progress.service';

@Component({
  selector: 'app-lesson-progress',
  templateUrl: './lesson-progress.component.html',
  styleUrls: ['./lesson-progress.component.scss']
})
export class LessonProgressComponent implements OnInit {

  public lessonProgress: any[];
  public loading: boolean;
  public error: boolean;

  constructor(
    private lessonProgressService: LessonProgressService
  ) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this.lessonProgressService.getList().subscribe(
      data => this.lessonProgress = data,
      err => {
        this.loading = false;
        this.error = true;
      },
      () => this.loading = false
    );
  }

}
