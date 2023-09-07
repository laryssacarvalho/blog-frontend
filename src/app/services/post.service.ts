import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response.model';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiBaseUrl = '';
  constructor(private readonly http: HttpClient) { 
    this.apiBaseUrl = 'https://laryssablog.azurewebsites.net/posts';
  }

  getPublishedPosts(): Observable<ApiResponseModel<PostModel[]>> {
    return this.http.get<ApiResponseModel<PostModel[]>>(`${this.apiBaseUrl}`);
  }

  getPostById(postId: number): Observable<ApiResponseModel<PostModel>> {
    return this.http.get<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}`);
  }
}
