import { Component, OnInit, OnDestroy } from '@angular/core';
// import { PostService } from '../post.service';
// import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  // posts=[];
  // private postSubscription : Subscription;

  // constructor(public postService:PostService) { }

  // ngOnInit(): void {
  //  this.posts = this.postService.getPosts();
  //  console.log(this.posts);
  //  this.postSubscription =this.postService.getPostsUpdatedListener().subscribe(
  //    (posts) =>{
  //      this.posts = posts;
  //    });
  // }

  // ngOnDestroy(){
  //   this.postSubscription.unsubscribe();
  // }

  // showPosts(){
  //   console.log(this.posts);
  //}

}
