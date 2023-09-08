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

  getPendingPosts(): Observable<ApiResponseModel<PostModel[]>> {
    return this.http.get<ApiResponseModel<PostModel[]>>(`${this.apiBaseUrl}/pending`);
  }

  getPostById(postId: number): Observable<ApiResponseModel<PostModel>> {
    return this.http.get<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}`);
  }

  addPost(title: string, content: string): Observable<ApiResponseModel<PostModel>> {
    return this.http.post<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}`, { title, content });
  }

  submitPost(postId: number): Observable<ApiResponseModel<PostModel>> {
    return this.http.post<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}/submit`, null);
  }

  approvePost(postId: number): Observable<ApiResponseModel<PostModel>> {
    return this.http.post<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}/approve`, null);
  }

  rejectPost(postId: number, comment: string): Observable<ApiResponseModel<PostModel>> {
    return this.http.post<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}/reject`, { comment });
  }

  addComment(postId: number, content: string): Observable<ApiResponseModel<PostModel>> {
    return this.http.post<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}/comments`, { content });
  }

  editPost(postId: number, title: string, content: string): Observable<ApiResponseModel<PostModel>> {
    return this.http.put<ApiResponseModel<PostModel>>(`${this.apiBaseUrl}/${postId}`, { title, content });
  }
}
