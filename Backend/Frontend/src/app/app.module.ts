import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { SemesterComponent } from './semester/semester.component';
import { FilterComponent } from './semester/filter/filter.component';
import { SchedulerComponent } from './semester/scheduler/scheduler.component';
import { TagListComponent } from './semester/filter/tag-list/tag-list.component';
import { CourseListComponent } from './semester/filter/course-list/course-list.component';
import { ConfigBarComponent } from './semester/scheduler/config-bar/config-bar.component';
import { CalendarComponent } from './semester/scheduler/calendar/calendar.component';
import { DayComponent } from './semester/scheduler/calendar/day/day.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BlockComponent } from './semester/scheduler/calendar/day/block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    SemesterComponent,
    FilterComponent,
    SchedulerComponent,
    TagListComponent,
    CourseListComponent,
    ConfigBarComponent,
    CalendarComponent,
    DayComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
