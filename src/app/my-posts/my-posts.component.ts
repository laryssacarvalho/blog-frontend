import { Component } from '@angular/core';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import { AuthorService } from '../services/author.service';
import { LocalStorageService } from '../services/local-storage.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {
  faComments = faComments;
  faCalendarAlt = faCalendarAlt;  

  posts: PostModel[] = [];

  constructor(private authorService: AuthorService, private localStorageService: LocalStorageService){}

  ngOnInit(): void {
    this.authorService.getPostsByAuthorId(parseInt(this.localStorageService.getUserId()!))
      .subscribe(result => {
        if(result.data?.length > 0)
          this.posts = result.data;
      });
  }
}
