import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/modules/courses/services/course.service';
import { Course } from 'src/modules/courses/models/course.model';
import { NotebookService } from '../../services/notebook.service';

@Component({
  selector: 'app-notebook-form',
  templateUrl: './notebook-form.component.html',
  styleUrls: ['./notebook-form.component.scss']
})
export class NotebookFormComponent implements OnInit {

  public loading: boolean;
  public courses: Course[];
  public notebook: any = {
    name: null,
    description: null,
    course: null
  };

  constructor(
    private notebookService: NotebookService,
    private courseService: CourseService
  ) { 
    this.loading = true;
  }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
      data => this.courses = data,
      err => console.error(err),
      () => this.loading = false
    )
  }

  saveNotebook(): void {
    this.notebookService.saveNotebook(this.notebook).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('done')
    );
  }
}
