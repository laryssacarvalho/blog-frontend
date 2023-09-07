import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuard } from './guards/auth.guard';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "posts", component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'posts/:postId', component: PostDetailComponent}
  // {path: "contact-create", component: ContactCreateComponent},
  // {path: "contact-list", component: ContactListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
