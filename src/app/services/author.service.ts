import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../models/api-response.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiBaseUrl = '';
  
  constructor(private readonly http: HttpClient) { 
    this.apiBaseUrl = 'https://laryssablog.azurewebsites.net/authors';
  }

  getPostsByAuthorId(authorId: number): Observable<ApiResponseModel<PostModel[]>> {
    return this.http.get<ApiResponseModel<PostModel[]>>(`${this.apiBaseUrl}/${authorId}/posts`);
  }
}
