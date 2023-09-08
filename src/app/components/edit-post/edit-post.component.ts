import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../../models/post.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  form = new FormGroup({
    "title": new FormControl("", Validators.required),
    "content": new FormControl("", Validators.required),
  });
  postId!: number;
  userId!: number;  
  // post: PostModel = { title: '', content: '', authorId: 0, comments: [], id: 0, publishedAt: null, status: 0};    

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute, private localStorageService: LocalStorageService){}  

  ngOnInit(): void {
    this.userId = parseInt(this.localStorageService.getUserId()!);
    this.postId = this.route.snapshot.params['postId'];
    this.getPost();
  }

  getPost(){
    this.postService.getPostById(this.postId)
    .subscribe(result => {
      if(result.data) {
        debugger;
        this.form.get('title')?.setValue(result.data.title);
        this.form.get('content')?.setValue(result.data.content);
        // this.post = result.data;

      } else {
        this.router.navigate(["posts/my-posts"]);
      }
    });
  }

  onSubmit(){
    this.postService.editPost(this.postId, this.form.value.title!, this.form.value.content!)
    .subscribe(_ => {
      this.router.navigate(["posts/my-posts"]);
    });    
  }
}
