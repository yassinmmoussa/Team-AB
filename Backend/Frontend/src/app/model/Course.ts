export class Course {

  constructor(
    public duration: number,
    public dept: string,
    public instructor: string,
    public code: number,
    public startingBlock: number,
    public colour: string,
    public name: string,
    public section: string,
    public days: [number],
    public year: number,
    public session: string,
    public type: string,
    public labSection?: string,
  ) {

  }
}
