import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SemesterComponent } from './semester/semester.component';
import { FilterComponent } from './semester/filter/filter.component';
import { CourseEntryComponent } from './semester/filter/course-list/course-entry/course-entry.component';
import { SchedulerComponent } from './semester/scheduler/scheduler.component';
import { TagListComponent } from './semester/filter/tag-list/tag-list.component';
import { CourseListComponent } from './semester/filter/course-list/course-list.component';
import { ConfigBarComponent } from './semester/scheduler/config-bar/config-bar.component';
import { CalendarComponent } from './semester/scheduler/calendar/calendar.component';
import { DayComponent } from './semester/scheduler/calendar/day/day.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlockComponent } from './semester/scheduler/calendar/day/block/block.component';
import { CourseDialogComponent } from './semester/scheduler/modals/course-dialog/course-dialog.component';
import { ConstraintsDialogComponent } from './semester/scheduler/modals/constraints-dialog/constraints-dialog.component';
import { OptimizationDialogComponent } from './semester/scheduler/modals/optimization-dialog/optimization-dialog.component';
import { CsvDialogComponent } from './semester/scheduler/modals/csv-dialog/csv-dialog.component';
import { TeamDialogComponent } from './semester/scheduler/modals/team-dialog/team-dialog.component';
import { ConfigDialogComponent } from './semester/scheduler/modals/config-dialog/config-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

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
    BlockComponent,
    CourseDialogComponent,
    ConstraintsDialogComponent,
    OptimizationDialogComponent,
    CsvDialogComponent,
    TeamDialogComponent,
    ConfigDialogComponent,
    CourseEntryComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConstraintsDialogComponent, CourseDialogComponent, OptimizationDialogComponent,
    TeamDialogComponent, CsvDialogComponent, ConfigDialogComponent]
})
export class AppModule { }
