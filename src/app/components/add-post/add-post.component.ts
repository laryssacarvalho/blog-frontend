import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  form = new FormGroup({
    "title": new FormControl("", Validators.required),
    "content": new FormControl("", Validators.required),
  });

  constructor(private postService: PostService, private router: Router){}

  onSubmit(){
    this.postService.addPost(this.form.value.title!, this.form.value.content!)
    .subscribe(_ => {
      this.router.navigate(["posts/my-posts"]);
    });    
  }
}
