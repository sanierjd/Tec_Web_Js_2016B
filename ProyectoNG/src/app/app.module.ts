import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MasterUrlService} from "./services/master-url.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Modulo en angular es como una aplicacion, definiendo servicios a nivel de aplicacion
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // En los providers van los servicios que queremos
  providers: [
    MasterUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
