import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputListComponent } from './input-list/input-list.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
