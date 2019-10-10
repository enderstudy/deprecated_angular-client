import { ClaimedStateCourseMetaFilterPipe } from './claimed-state-course-meta-filter.pipe';
import { CourseMetadata } from '../components/metadata/models/course-metdata.model';

describe('ClaimedStateCourseMetaFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ClaimedStateCourseMetaFilterPipe();
    expect(pipe).toBeTruthy();
  });

  const testData: CourseMetadata[] = [
    {
      id: 'first',
      course: 'any',
      courseId: 'someId',
      kind: 'string',
      etag: 'string',
      youtubeId: 'string',
      youtubeVideoId: 'string',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date()
    },
    {
      id: 'second',
      course: 'any',
      courseId: null,
      kind: 'string',
      etag: 'string',
      youtubeId: 'string',
      youtubeVideoId: 'string',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date()
    }
  ];
  it('find claimed', () => {
    const pipe = new ClaimedStateCourseMetaFilterPipe();
    const result: CourseMetadata[] = pipe.transform(testData, true);
    expect(result.length).toBe(1);
    expect(result).toContain(testData[0]);
  });
  it('find unclaimed', () => {
    const pipe = new ClaimedStateCourseMetaFilterPipe();
    const result: CourseMetadata[] = pipe.transform(testData, false);
    expect(result.length).toBe(1);
    expect(result).toContain(testData[1]);
  });
});
