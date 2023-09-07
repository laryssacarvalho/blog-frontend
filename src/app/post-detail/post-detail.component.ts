import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private postService: PostService, 
    private route: ActivatedRoute){}
  
  postId!: number;
  post: PostModel = { title: 'Post 1', content: 'Content 1', publishedAt: new Date(), comments: [{content: 'comment 1', isRejection: false}, {content: 'comment 1', isRejection: false}], id: 1};

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['postId'];
    this.postService.getPostById(this.postId)
      .subscribe(result => {
        if(result.data)
          this.post = result.data;
      });
  }
}
