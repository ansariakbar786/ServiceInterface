import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsumerComponent } from './hello/consumercomponent';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, HelloComponent, ConsumerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
