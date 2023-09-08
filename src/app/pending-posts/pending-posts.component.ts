import { Component } from '@angular/core';
import { PostModel } from '../models/post.model';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-pending-posts',
  templateUrl: './pending-posts.component.html',
  styleUrls: ['./pending-posts.component.css']
})
export class PendingPostsComponent {
  faComments = faComments;
  faCalendarAlt = faCalendarAlt;  
  posts: PostModel[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.postService.getPendingPosts()
      .subscribe(result => {
        if(result.data?.length > 0)
          this.posts = result.data;
      });
  }
}
