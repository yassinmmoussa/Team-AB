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

  toJSON(): string {
    const res = `
      {
        "dept": ${JSON.stringify(this.dept)},
        "name": ${JSON.stringify(this.name)},
        "session": ${JSON.stringify(this.session)},
        "year": ${JSON.stringify(this.year)},
        "courses": ${JSON.stringify(this.courseRefs)}
      }
    `;
    return res;
  }

  courseRefsToJSON(): string[] {
    return this.courseRefs.map(ref => JSON.stringify(ref));
  }

  hasCourse(course: Course): boolean {
    return this.courseRefs.includes(course.code + '');
  }
}
