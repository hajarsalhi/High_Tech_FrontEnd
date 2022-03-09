import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  newArticle = new Article(0,"","",0);

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
  }

  addArticle(){
    this.articleService.addArticle(this.newArticle);
  }

}
