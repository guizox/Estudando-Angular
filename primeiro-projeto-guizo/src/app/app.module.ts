import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { FirstComponentTerminalComponent } from './first-component-terminal/first-component-terminal.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstComponentTerminalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
