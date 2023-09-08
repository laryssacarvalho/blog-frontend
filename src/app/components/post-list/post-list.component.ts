import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../models/post.model';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  faComments = faComments;
  faCalendarAlt = faCalendarAlt;  
  posts: PostModel[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {

    this.postService.getPublishedPosts()
      .subscribe(result => {
        if(result.data?.length > 0)
          this.posts = result.data;

      });
  }
}
