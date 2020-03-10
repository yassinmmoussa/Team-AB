import { ColorMap } from './ColorMap';

export class Course {

  blockOptions: number[] = [2, 4, 6];
  colorMap: ColorMap = new ColorMap();

  constructor(
    public courseRef: string,
    public dept: string,
    public instructor: string,
    public code: number,
    public startingBlock: number,
    public colour: string,
    public name: string,
    public section: string,
    public days: number[],
    public year: number,
    public session: string,
    public type: string,
    public display: boolean = false,
    public labSection: string = '',
    public willOptimize: boolean = false,
    public capacity: number = 0,
    public room: string = 'Not Set',
    public blocksPerWeek: number = 6
  ) {}

  toJSON(): string {
    const res = `
      {
        "course_ref": ${JSON.stringify(this.courseRef)},
        "duration": ${JSON.stringify(this.duration())},
        "dept": ${JSON.stringify(this.dept)},
        "instructor": ${JSON.stringify(this.instructor)},
        "code": ${this.code},
        "starting_block": ${JSON.stringify(this.startingBlock)},
        "colour": ${JSON.stringify(this.colour)},
        "name": ${JSON.stringify(this.name)},
        "section": ${JSON.stringify(this.section)},
        "days": ${JSON.stringify(this.days)},
        "year": ${JSON.stringify(this.year)},
        "session": ${JSON.stringify(this.session)},
        "type": ${JSON.stringify(this.type)},
        "lab_section": ${JSON.stringify(this.labSection)},
        "display": ${JSON.stringify(this.display)},
        "capacity": ${JSON.stringify(this.capacity)},
        "room": ${JSON.stringify(this.room)},
        "blocks_per_wk": ${JSON.stringify(this.blocksPerWeek)}
      }
    `;
    return res;
  }

  dayOptions(): string[] {
    let res = [];
    switch (this.teachingHours()) {
      case 1:
        res = ['M,W,F'];
        break;
      case 2:
        res = ['M,W', 'T,Th'];
        break;
      case 3:
        res = ['M', 'T', 'W', 'Th', 'F'];
        break;
      default:
        res = [];
        break;
    }
    return res;
  }

  daysOut(): string {
    let res = '';
    this.days.forEach((day, i) => {
      switch (day) {
        case 0:
          res += 'M';
          break;
        case 1:
          res += 'T';
          break;
        case 2:
          res += 'W';
          break;
        case 3:
          res += 'Th';
          break;
        case 4:
          res += 'F';
          break;
        default:
          break;
      }
      if (i !== this.days.length - 1) {
        res += ',';
      }
    });
    return res;
  }

  startTime(): string {
    return '' + this.blockToTime(this.startingBlock);
  }

  endTime(): string {
    return '' + this.blockToTime(this.startingBlock + this.duration());
  }

  blockToTime(blockNo: number): string {
    let minute = '';
    let hour = '';
    let ampm = '';
    // Hour

    // 2: 2/2 = (1 + 7) % 12 = 8 + 1
    hour = '' + (((Math.floor(blockNo / 2) + 7) % 12) + 1);

    // Minute
    if (blockNo % 2 === 0) {
      minute = '00';
    } else {
      minute = '30';
    }

    // ampm
    if (blockNo >= 8) {
      ampm = 'pm';
    } else {
      ampm = 'am';
    }

    const formattedEnding = (minute === '00') ? ampm : ':' + minute + ampm;
    return hour + formattedEnding;
  }

  innerContainerColour(): string {
    return this.colorMap.getLighterColor(this.dept);
  }

  deepCopy(): Course {
    return new Course(this.courseRef,
                      this.dept,
                      this.instructor,
                      this.code,
                      this.startingBlock,
                      this.colour,
                      this.name,
                      this.section,
                      this.cloneDays(),
                      this.year,
                      this.session,
                      this.type,
                      this.display,
                      this.labSection,
                      this.willOptimize,
                      this.capacity,
                      this.room,
                      this.blocksPerWeek
                      );
  }

  cloneDays(): number[] {
    const res = [];
    this.days.forEach(day => res.push(day));
    return res;
  }

  teachingHours(): number {
    return this.blocksPerWeek / 2;
  }

  duration(): number {
    return this.blocksPerWeek / this.days.length;
  }

}
