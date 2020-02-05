import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { FilterByTitlePipe } from './pipes/filter-by-title/filter-by-title.pipe';
import { PageService } from './services/page/page.service';
import { RequestsService } from "./services/requests/requests.service";
import { FilterByMinePipe } from './pipes/filter-by-mine/filter-by-mine.pipe';
import { FormBuilder } from "@angular/forms";

import { ReactiveFormsModule }   from '@angular/forms';

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
    LoadMoreBtnComponent,
    FilterByTitlePipe,
    FilterByMinePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PageService,
    RequestsService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
