import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';
import { PanierService } from '../panier/panier.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private panierService : PanierService) { }


  addArticle( article : Article){
    this.panierService.articleList.next(article);
  }
}
