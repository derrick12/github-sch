import { User } from './../../user';
import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ProfileService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user: User;
  username: string;
  repos: any[];

  constructor(private profileService: ProfileService) { }

  searchUser() {
    this.user = this.profileService.user;
    this.profileService.getProfileData();
    this.profileService.updateProfileData(this.username);
    this.profileService.getRepoData();
    this.repos = this.profileService.repoArray;
  }
  ngOnInit() {
  }

}
