import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Panier } from 'src/app/models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public cartItemList: Article[] =[];
  public articleList = new BehaviorSubject<any>([]);

  constructor() { }
  getArticles(){
    return this.articleList.asObservable();
  }

  setArticle(article : any){
    this.cartItemList.push(...article);
    this.articleList.next(article);
  }

  addArticle( article : Article){
    this.articleList.next(article);
  }

  addToCart(article :any ){
    this.cartItemList.push(article);
    this.articleList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let prix_total = 0 ;
    this.cartItemList.map((article : Article)=>{
      prix_total+=article.prix;
    })
    return prix_total ; 
  }

  removeArticle(article:Article ){
    this.cartItemList.map((art : Article , index:any)=>{
      if(article.id === art.id){
        this.cartItemList.splice(index , 1);}
    })
    this.articleList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [] ;
    this.articleList.next(this.cartItemList);
  }
}
