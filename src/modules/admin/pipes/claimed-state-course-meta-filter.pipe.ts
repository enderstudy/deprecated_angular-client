import { Pipe, PipeTransform } from '@angular/core';
import { CourseMetadata } from '../components/metadata/models/course-metdata.model';

/**
 * Limits a collection of Course Metadata items to only those that are
 * clamed/unclaimed (aka - only course meta items with some courses/no course)
 */
@Pipe({
  name: 'claimedStateCourseMetaFilter'
})
export class ClaimedStateCourseMetaFilterPipe implements PipeTransform {

  transform(collection: CourseMetadata[], claimedState: boolean): CourseMetadata[] {
    if (!claimedState) {
      return collection.filter((courseMeta) => {
        return courseMeta.courseId === null;
      });
    } else {
      return collection.filter((courseMeta) => {
        return courseMeta.courseId !== null;
      });
    }
  }

}
