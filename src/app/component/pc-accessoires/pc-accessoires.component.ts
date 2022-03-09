import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ApiService } from 'src/app/services/api/api.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-pc-accessoires',
  templateUrl: './pc-accessoires.component.html',
  styleUrls: ['./pc-accessoires.component.css']
})
export class PcAccessoiresComponent implements OnInit {

  public aricleList : Article[] = [] ;
  
  constructor(private api : ApiService, private panierService : PanierService) { }

  ngOnInit(): void {
    this.api.getArticle()
    .subscribe(res=>{
      this.aricleList = res; 
      this.aricleList.forEach((article : Article)=>{
        Object.assign(article,{quantity :1 , prix_total : article.prix});
      });
      console.log(this.aricleList);
    })
  }

  addToCart(article : Article){
    this.panierService.addToCart(Article);
  }
  

}
