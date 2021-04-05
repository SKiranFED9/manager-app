import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaySelectedPostsComponent } from './views/display-selected-posts/display-selected-posts.component';
import { ManageAllPostsComponent } from './views/manage-all-posts/manage-all-posts.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: ManageAllPostsComponent },
      { path: 'getPosts/:id', component: DisplaySelectedPostsComponent }     
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
