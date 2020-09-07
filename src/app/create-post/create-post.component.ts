import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PostService } from '../post.service';
import { Post } from '../post.model';
import {mimeType} from './mime-type.validator';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form:FormGroup;
  imagePreview:string;
  private mode = 'create';
  private postId:string;
  private post: Post;
  posts=[];

  constructor(public postService:PostService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.postService.getPost(this.postId).subscribe(postData =>{
          this.post = {
            id:postData._id,
            title: postData.title,
            content: postData.content,
            imagePath: postData.imagePath
          };
          this.form.setValue({
          'title':this.post.title,
          'content':this.post.content,
          'image':this.post.imagePath
        })
        });
      }else{
        this.mode = 'create';
        this.postId = null;
      }
    });


    this.form = new FormGroup({
      title: new FormControl(null, {validators:[Validators.required]}),
      content : new FormControl(null, {validators:[Validators.required]}),
      image : new FormControl(null, {validators:[Validators.required], asyncValidators:[mimeType]})
    });

  }
  onImagePicked(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost(){
    console.log("Submit was clicked");
    if(this.form.invalid){
      return;
    }else{
      // const post = {
      //   image:'../assets/noPhoto.jpg',
      //   title: this.form.value.title,
      //   content: this.form.value.content
      // }
      // this.posts.push(post);
      // console.log(this.posts);
      if(this.mode =='create'){
        this.postService.addPost( this.form.value.title , this.form.value.content, this.form.value.image);
      }else{
        this.postService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image)
      }
    }

    this.form.markAsPristine();
    this.form.markAsUntouched();
  }



}
