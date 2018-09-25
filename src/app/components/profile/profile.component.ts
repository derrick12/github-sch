import { ProfileService } from './../../services/profile.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  user: User;

  // inject the service
  constructor(private profileService: ProfileService) {

    // call the functions
    this.profileService.getMyProfile();
    this.user = this.profileService.user;

    this.profileService.getMyRepo();
    this.profile = this.profileService.repoArray;
}

  ngOnInit() {
  }

}
