import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService], // make it available throught the app
  bootstrap: [AppComponent]
})
export class AppModule { }
