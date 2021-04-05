import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetAllPostsService } from './services/get-all-posts.service';
import { ManageAllPostsComponent } from './views/manage-all-posts/manage-all-posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DisplaySelectedPostsComponent } from './views/display-selected-posts/display-selected-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAllPostsComponent,
    DisplaySelectedPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [HttpClient, GetAllPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
