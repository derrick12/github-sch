import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; // To get data from github
import 'rxjs/add/operator/map'; // we the math operator to return all results from github in the form of observables
// we will use the observables in the components wher we will subscribe to them and get data

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // create properties
  private username: string;

  // The clientid and the clientsecret is are for the Registaration of OAuth application to exceed the limits of fetching data.
   private clientid = '';
   private clientsecret = '';

  // inject the http module to the constructor
  constructor(private http: Http) {
    console.log("service is now ready!");
    this.username = 'derrick12';
   }

   // The function is used to get profile data from github
   getProfileData() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +
    "&client_secret=" + this.clientsecret).map(res => res.json());
   }
}
