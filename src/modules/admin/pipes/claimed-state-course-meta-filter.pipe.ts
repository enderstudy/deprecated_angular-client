import { Pipe, PipeTransform } from '@angular/core';
import { CourseMetadata } from '../components/metadata/models/course-metdata.model';

/**
 * Limits a collection of Course Metadata items to only those that are
 * unclaimed (aka - only course meta items with no course)
 */
@Pipe({
  name: 'claimedStateCourseMetaFilter'
})
export class ClaimedStateCourseMetaFilterPipe implements PipeTransform {

  transform(collection: CourseMetadata[], inverse: boolean): any {

    if (!inverse) {
      return collection.filter((courseMeta) => {
        return courseMeta.courseId === null;
      });
    } else {
      console.log('inverse is true');
      return collection.filter((courseMeta) => {
        return courseMeta.courseId !== null;
      });
    }
  }

}
