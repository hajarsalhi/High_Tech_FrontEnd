export class Article {
 
    id: number = Date.now() + Math.round(Math.random()*1000);
    idc: number;
    libelle: string;
    marque = '';
    prix: number;
    photos: string;
 

    constructor(idc : number , libelle : string , prix : number,photos: string){
        this.idc = idc ;
        this.libelle = libelle ;
        this.prix = prix ; 
        this.photos = photos ;
    }
}