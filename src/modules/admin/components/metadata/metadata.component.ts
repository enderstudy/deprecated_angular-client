import { Component, OnInit } from '@angular/core';
import { MetadataService } from './services/metadata.service';
import { CourseMetadata } from './models/course-metdata.model';
import { Course } from '../../../courses/models/course.model';
import { CourseService } from '../../../courses/services/course.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {

  public courseMeta: CourseMetadata[];
  public courses: Course[];

  public loading: boolean;

  constructor(
    private metadataService: MetadataService,
    private courseService: CourseService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    forkJoin([
      this.metadataService.getCourseMetadata(),
      this.courseService.getCourseList()
    ]).subscribe(
      data => {
        this.courseMeta = data[0];
        this.courses = data[1];
      },
      err => {
        console.error(err);
      },
      () => {
        this.loading = false;
      }
    );
  }

  assignCourseMeta(mData: CourseMetadata): void {
    mData.courseId = mData.course;
    mData.course = this.courses.find((course: Course) => {
      return String(course.id) === String(mData.courseId);
    });

    this.metadataService.updateCourseMetadata(mData).subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('done')
    );
  }
}
