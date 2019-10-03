import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { pluck } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class CourseService {

  private routeStorage: any;

  // @todo - add caching support via HttpClientCache

  constructor(
      private http: HttpClient
  ) { }

  public getCourseList(): Observable<any> {
    return this.http.get(env.api.url('courses')).pipe(
      pluck('data')
    );
  }

  public getCourse(id: any): Observable<any> {
    return this.http.get(env.api.url('courses/:id', {id})).pipe(
      pluck('data')
    );
  }

  public getRouteStorage(): any {
    return this.routeStorage;
  }

  public setRouteStorage(course: any): void {
    this.routeStorage = course;
  }
}
