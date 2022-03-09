import { Article } from "./article";

export class Panier {
    id = Date.now() + Math.round(Math.random()*1000);
    articles : Article[] = [] ;
    prix_total : number =0 ;

    
}