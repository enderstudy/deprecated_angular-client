import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class LessonService {

  private routeStorage: any;

  constructor(
    private http: HttpClient
  ) { }

  public getLesson(id: string): Observable<any> {
    return this.http.get(`//localhost:5000/api/lessons/${id}`).pipe(
      pluck('data')
    );
  }

  public getRouteStorage(): any {
    return this.routeStorage;
  }

  public setRouteStorage(lesson: any): void {
    this.routeStorage = lesson;
  }
}
