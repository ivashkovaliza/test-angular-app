import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-article-page',
  templateUrl: './edit-article-page.component.html',
  styleUrls: ['./edit-article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditArticlePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
