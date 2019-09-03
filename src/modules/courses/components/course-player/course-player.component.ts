import { Component, OnInit, Sanitizer } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { LessonService } from '../../services/lesson.service';
import { Course } from '../../models/course.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.scss']
})
export class CoursePlayerComponent implements OnInit {

  public displayMode: String = 'wide';
  public loading: boolean; 
  public course: Course;
  public lesson: any;

  constructor(
    private courseService: CourseService,
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { 
    this.loading = true;
  }

  ngOnInit() {
    const course = this.courseService.getRouteStorage();
    const lesson = this.lessonService.getRouteStorage();

    if (!course) {
      this.courseService.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(
        data => this.course = data
      );
    } else {
      this.course = course;
    }

    if (!lesson) {
      this.lessonService.getLesson(this.route.snapshot.paramMap.get('lesson_id')).subscribe(
        data => this.lesson = data
      );
    } else {
      this.lesson = lesson;
    }

    console.log(this.lesson, this.course);
    this.loading = false;
  }

  public setDisplayMode(displayMode: string) : void {
    this.displayMode = displayMode;
  }

  public embedUrl() {
    const prefix = "https://www.youtube.com/embed/";
    const videoId = this.lesson.lessonMeta.youtubeVideoId;

    return this.sanitizer.bypassSecurityTrustResourceUrl(prefix + videoId);
  }
}
