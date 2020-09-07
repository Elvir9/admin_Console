import { Component, OnInit, OnDestroy } from '@angular/core';
// import { PostService } from '../../post.service';
// import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  // posts=[];
  // private postSubscription : Subscription;

  // constructor(public postService:PostService) { }

  // ngOnInit(): void {
  //   console.log("nesto");
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

  // }
}
