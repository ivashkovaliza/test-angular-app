import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MainViewComponent } from './main-view/main-view.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'main', component: HelloWorldComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
