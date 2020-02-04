import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewsPageComponent} from "./news-page/news-page.component";
import {LogInPageComponent} from "./log-in-page/log-in-page.component";
import {AddArticlePageComponent} from "./add-article-page/add-article-page.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {EditArticlePageComponent} from "./edit-article-page/edit-article-page.component";

const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'login', component: LogInPageComponent},
  {path: 'create', component: AddArticlePageComponent},
  {path: 'edit', component: EditArticlePageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
