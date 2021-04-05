import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetAllPostsService } from 'src/app/services/get-all-posts.service';


@Component({
  selector: 'app-display-selected-posts',
  templateUrl: './display-selected-posts.component.html',
  styleUrls: ['./display-selected-posts.component.css']
})
export class DisplaySelectedPostsComponent implements OnInit {
  cards: any[];
  cardDetails: any;
  API_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"
  postId: any;
  getComments: Object;
  isCollapsed = false;
  isCommentsBtnCliked = false;

  constructor(
    private getAllPostsService: GetAllPostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      console.log(params);
      this.getAllPostsService.getAllPosts('cards').subscribe(data => {
        this.cards = data;
        this.cardDetails = this.cards.find(card => card.id == params.id);
        console.log(this.cardDetails);

      })
      this.postId = params.id;
      console.log(this.postId);
      this.http.get(`${this.API_COMMENTS_URL}?postId=${this.postId}`)
        .subscribe(data => {
          this.getComments = data;
          console.log(data);
        });
    });

  }

  goToSelectedPostComents(id) {
    this.isCommentsBtnCliked = true;
    console.log(this.getComments);
    // this.router.navigate(['/getComments/', id]);
  }

}
