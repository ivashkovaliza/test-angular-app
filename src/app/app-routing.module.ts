import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {NewsPageComponent} from "./news-page/news-page.component";
import {LogInPageComponent} from "./log-in-page/log-in-page.component";


const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'login', component: LogInPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
