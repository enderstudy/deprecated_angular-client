import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  public activeTab = 'description';
  public displayMode = 'wide';

  public activeLesson;

  @Input() course: Course;

  constructor(
      private courseService: CourseService,
      private lessonService: LessonService,
      private route: ActivatedRoute,
      private router: Router,
      private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const course: Course = this.courseService.getRouteStorage();

    if (!course) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.courseService.getCourse(id).subscribe(
        data => this.course = data,
          err => console.error(err)
      );
    } else {
      this.course = course;
    }
  }

  public setDisplayMode(displayMode: string): void {
    this.displayMode = displayMode;
  }

  public selectLesson(lesson: any): void {
    this.activeLesson = lesson;
  }

  public embedUrl() {
    const prefix = 'https://www.youtube.com/embed/';
    const videoId = this.activeLesson.lessonMeta[0].youtubeVideoId;

    return this.sanitizer.bypassSecurityTrustResourceUrl(prefix + videoId);
  }

  changeTab(tabName: string) {
    this.activeTab = tabName;
  }

  openPlayer(lesson: any) {
    this.courseService.setRouteStorage(this.course);
    this.lessonService.setRouteStorage(lesson);
    this.router.navigate(['/', 'courses', this.course.id, 'lesson', lesson.id]);
  }
}
