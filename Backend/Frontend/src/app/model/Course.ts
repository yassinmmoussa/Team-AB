export class Course {

  constructor(
    public courseRef: string,
    public duration: number,
    public dept: string,
    public instructor: string,
    public code: string,
    public startingBlock: number,
    public colour: string,
    public name: string,
    public section: string,
    public days: number[],
    public year: number,
    public session: string,
    public type: string,
    public display?: boolean,
    public labSection: string = '',
    public isLocked: boolean = false,
    public capacity: number = 0,
    public room: string = 'Not Set',
  ) {}

  toJSON(): string {
    const res = `
      {
        "course_ref": ${this.courseRef},
        "duration": ${JSON.stringify(this.duration)},
        "dept": ${JSON.stringify(this.dept)},
        "instructor": ${JSON.stringify(this.instructor)},
        "code": ${JSON.stringify(this.code)},
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
        "is_locked": ${JSON.stringify(this.isLocked)},
        "capacity": ${JSON.stringify(this.capacity)},
        "room": ${JSON.stringify(this.room)}
      }
    `;
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
    return '' + this.blockToTime(this.startingBlock + this.duration + 1);
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
    const lessOpaqueHex = this.colour + '40';
    return lessOpaqueHex;
  }

  deepCopy(): Course {
    return new Course(this.courseRef,
                      this.duration,
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
                      this.isLocked,
                      this.capacity,
                      this.room
                      );
  }

  cloneDays(): number[] {
    const res = [];
    this.days.forEach(day => res.push(day));
    return res;
  }
}
