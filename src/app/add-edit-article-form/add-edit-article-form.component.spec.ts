import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArticleFormComponent } from './add-edit-article-form.component';

describe('AddEditArticleFormComponent', () => {
  let component: AddEditArticleFormComponent;
  let fixture: ComponentFixture<AddEditArticleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditArticleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
