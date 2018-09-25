import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { SearchComponent } from './components/search/search.component';

// Defining routes
const routes:Routes = [
  {path: "home", component: ProfileComponent},
  {path: "search", component: SearchComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService], // make it available throught the app
  bootstrap: [AppComponent]
})
export class AppModule { }
