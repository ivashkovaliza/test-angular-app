import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {RequestsService} from "../services/requests/requests.service";
import { Router } from "@angular/router";
import {PageService} from "../services/page/page.service";

@Component({
  selector: 'app-add-edit-article-form',
  templateUrl: './add-edit-article-form.component.html',
  styleUrls: ['./add-edit-article-form.component.scss']
})
export class AddEditArticleFormComponent implements OnInit {
  addEditForm: FormGroup;
  username = '';

  constructor(private requestsService: RequestsService, private router: Router, private pageService: PageService) { }

  ngOnInit() {
    this.addEditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description:  new FormControl ('', Validators.required),
      urlToImage: new FormControl(''),
      content: new FormControl ('', Validators.required),
    });
    this.pageService.currentUser.subscribe(username => this.username = username);
  }

  onSubmitAddEdit(article) {
    article.author = this.username;
    this.router.navigate(["/"]);
    this.requestsService.setMyArticles(article);
  }

}
