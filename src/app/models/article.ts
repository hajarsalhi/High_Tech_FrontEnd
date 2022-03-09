export class Article {
 
    id: number = Date.now() + Math.round(Math.random()*1000);
    idc: number;
    libelle: string;
    marque ;
    prix: number;
    photos: string="";
 

    constructor(idc : number , libelle : string ,marque: string, prix : number){
        this.idc = idc ;
        this.libelle = libelle ;
        this.prix = prix ; 
        this.marque = marque ;
    }
}