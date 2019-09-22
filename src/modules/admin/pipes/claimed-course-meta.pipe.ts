import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claimedCourseMeta'
})
export class ClaimedCourseMetaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
