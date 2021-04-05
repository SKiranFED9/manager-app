import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllPostsService } from 'src/app/services/get-all-posts.service';

@Component({
  selector: 'app-manage-all-posts',
  templateUrl: './manage-all-posts.component.html',
  styleUrls: ['./manage-all-posts.component.css']
})
export class ManageAllPostsComponent implements OnInit {
  users: any;
  activeIds = 'acc-2';
  searchText;
  expandContent = true;

  constructor(
    private getAllPostsService: GetAllPostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllPostsService.getAllPosts('users').subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    });
  }

  goToMemberDetails(id) {
    this.router.navigate(['/getPosts/', id]);
  }

  // findDetails(data) {
  //   return this.users.filter(x => x.name === data.name);
  // }

  // companyDetails(data) {
  //   return this.users.filter(x => x.username === data.username);
  // }
}
