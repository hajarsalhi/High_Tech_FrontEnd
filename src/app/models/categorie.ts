export class Categorie {
    id = Date.now() + Math.round(Math.random()*1000);
    libelle : string ;

    constructor (libelle : string){
        this.libelle = libelle ;
    }
}