import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    AngularFontAwesomeModule,
    FileUploadModule,
    ChartModule,
    CalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
