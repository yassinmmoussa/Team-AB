import { Course } from './Course';

export class Curricula {

  constructor(
    public curriculaRef: string,
    public dept: string,
    public name: string,
    public session: string,
    public year: string,
    public courseRefs: string[]
  ) {}

  hasCourse(course: Course): boolean {
    return this.courseRefs.includes(course.courseRef);
  }
}
