import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuard } from './guards/auth.guard';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostComponent } from './add-post/add-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PendingPostsComponent } from './pending-posts/pending-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "posts", component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'posts/add', component: AddPostComponent, canActivate: [AuthGuard]},
  {path: 'posts/my-posts', component: MyPostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/pending', component: PendingPostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/edit/:postId', component: EditPostComponent, canActivate: [AuthGuard]},
  {path: 'posts/:postId', component: PostDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
