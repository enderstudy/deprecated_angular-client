import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseMetadata } from '../models/course-metdata.model';
import { pluck } from 'rxjs/operators';

@Injectable()
export class MetadataService {

  constructor(
    private http: HttpClient
  ) { }

  getCourseMetadata(): Observable<CourseMetadata[]> {
    return this.http.get('//localhost:5000/api/course-meta').pipe(
      pluck('data')
    );
  }

  updateCourseMetadata(data: CourseMetadata): Observable<CourseMetadata> {
    return this.http.put(`//localhost:5000/api/course-meta/${data.id}`, data).pipe(
      pluck('data')
    );
  }
}
