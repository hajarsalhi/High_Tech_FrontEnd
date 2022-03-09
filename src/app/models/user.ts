

export class User{
    id : number =Date.now() + Math.round(Math.random()*1000); 
    username : string = '';
    email : string='' ;
    password : string='';
    role : string = 'USER';

   
}