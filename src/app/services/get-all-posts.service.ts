import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


const API_URL = 'https://jsonplaceholder.typicode.com/posts';
// const API_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(url): Observable<any> {
    return this.http.get(API_URL).pipe(map(res => res));
  }

  // getAllComments(url): Observable<any> {
  //   return this.http.get(API_COMMENTS_URL).pipe(map(res => res));
  // }
}
