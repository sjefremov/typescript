import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, AddExtraTextPipe, PrintStars, SomeFilterPipe, UserComponent }  from './app.component';
//import { AddExtraTextPipe }  from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddExtraTextPipe, PrintStars, SomeFilterPipe, UserComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
