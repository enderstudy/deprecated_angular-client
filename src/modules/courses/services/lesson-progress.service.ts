import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonProgressService {

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<any> {
    return this.http.get(env.api.url('lesson-progress')).pipe(
      pluck('data')
    );
  }

  recordLessonProgress(lessonId: string): Observable<any> {
    return this.http.post(env.api.url('lesson-progress'), {lessonId}).pipe(
      pluck('data')
    );
  }
}
