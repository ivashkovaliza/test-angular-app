import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { FilteringMenuComponent } from './filtering-menu/filtering-menu.component';
import { AddArticlePageComponent } from './add-article-page/add-article-page.component';
import { AddEditArticleFormComponent } from './add-edit-article-form/add-edit-article-form.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { EditArticlePageComponent } from './edit-article-page/edit-article-page.component';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NavigationComponent,
    NewsPageComponent,
    NewsItemComponent,
    NewsListComponent,
    LogInPageComponent,
    FilteringMenuComponent,
    AddArticlePageComponent,
    AddEditArticleFormComponent,
    ArticlePageComponent,
    EditArticlePageComponent,
    LoadMoreBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
