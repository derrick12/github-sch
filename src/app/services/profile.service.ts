import { environment } from './../../environments/environment';
import { Repository } from './../repository';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; // To get data from github

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  // create properties
  public userName: string;
  public user: User;
  public repository: Repository;
  public repoArray: any = [];
  private endpoint: string = "/users/"; // EndPoint is a place that APIs send requests and where the resource lives: private connection

  // inject the http module to the constructor
  constructor(private http:Http) {
  	console.log("service is now ready!");
    this.userName = '';
    this.user = new User("","","","","");
    this.repository =  new Repository("","","");
  }

// The function is used to get profile data from github
  getMyProfile () {
    let promise = new Promise ((resolve, reject) => {
        this.http.get(environment.apiUrl + this.endpoint + "derrick12" + "?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
            res => {
              this.user = res.json().name;
              this.user.user_login = res.json().login;
              this.user.user_bio = res.json().bio;
              this.user.user_link = res.json().html_url;
              this.user.img_link = res.json().avatar_url;
                resolve();
            }, error => {
                reject(error);
            }
        );
    });
    return promise;
}

getMyRepo() {
  let promise = new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + this.endpoint + "derrick12" + "/repos?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
          res => {
              for (let repo of res.json()){
                  this.repository.name = repo.name;
                  this.repository.description = repo.description;
                  this.repository.repo_link = repo.html_url;
                  this.repoArray.push(this.repository);
                  this.repository =  new Repository("","","");
                  resolve();
              }
          }, error => {
              reject(error);
          }
      );
  });
  return promise;
}


   getProfileData() {
     let promise = new Promise ((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get(environment.apiUrl + this.endpoint + this.userName + "?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
        res => {
          this.user = res.json().name;
          this.user.user_login = res.json().login;
          this.user.user_bio = res.json().bio;
          this.user.user_link = res.json().html_url;
          this.user.img_link = res.json().avatar_url;
          resolve();
        }, error => {
          reject(error);
        }
      );
     });
     return promise;
  }


  getRepoData() {
    this.repoArray = [];
    let promise = new Promise((resolve, reject) => {
        // tslint:disable-next-line:max-line-length
        this.http.get(environment.apiUrl + this.endpoint + this.userName + "/repos?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
            res => {
                for (let repo of res.json()){
                    this.repository.name = repo.name;
                    this.repository.description = repo.description;
                    this.repository.repo_link = repo.html_url;
                    this.repoArray.push(this.repository);
                    this.repository =  new Repository("","","");
                    resolve();
                }
            }, error => {
                reject(error);
            }
        );
    });
    return promise;
}

updateProfileData(username: string) {
  this.userName = username;
}


}
