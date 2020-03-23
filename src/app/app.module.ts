import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './event/event.component';
import { FilterComponent } from './filter/filter.component';
import { EventCreatorFormComponent } from './event-creator-form/event-creator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    FilterComponent,
    EventCreatorFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
