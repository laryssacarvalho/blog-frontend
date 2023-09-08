import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../models/post.model';
import { LocalStorageService } from '../services/local-storage.service';
import { PostStatus } from '../enums/post-status.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private postService: PostService, 
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute){}
  
  postId!: number;
  userRole!: string;  
  userId!: number;  
  post: PostModel = { title: '', content: '', authorId: 0, comments: [], id: 0, publishedAt: null, status: 0};
  form = new FormGroup({ "comment": new FormControl("", Validators.required) });

  ngOnInit(): void {
    this.userRole = this.localStorageService.getRole()!;
    this.userId = parseInt(this.localStorageService.getUserId()!);
    this.postId = this.route.snapshot.params['postId'];
    this.getPost();
  }

  getPost(){
    this.postService.getPostById(this.postId)
    .subscribe(result => {
      if(result.data)
        this.post = result.data;
    });
  }
  
  onSubmitPost(){
    this.postService.submitPost(this.postId)
      .subscribe(_ => {
        this.getPost();
      });
  }

  onApprovePost(){
    this.postService.approvePost(this.post.id)
    .subscribe(_ => {
      this.getPost();
    });
  }

  onSubmitComment(){
    this.postService.addComment(this.post.id, this.form.value.comment!)
    .subscribe(_ => {
      this.getPost();
    });
  }

  canSubmitPost(){
    return this.post.authorId == this.userId && (this.post.status == PostStatus.Created || this.post.status == PostStatus.Rejected);
  }

  isPublished(){
    return this.post.status == PostStatus.Published;
  }

  isRejected(){
    return this.post.status == PostStatus.Rejected;
  }

  isSubmitted(){
    return this.post.status == PostStatus.Pending;
  }

  rejectionComments(){
    return this.post.comments.filter(c => c.isRejection);
  }

  publicComments(){
    return this.post.comments.filter(c => !c.isRejection);
  }
}
