import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
