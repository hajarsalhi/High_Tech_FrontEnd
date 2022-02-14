import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';

const routes: Routes = [
  { path : 'Home', component : HomeComponent},
  { path : 'PcPortable', component: PcPortableComponent},
  { path : 'PcDeBureau', component:PcBureauComponent},
  { path : 'Accessoires',component : PcAccessoiresComponent},
  { path : 'LogIn', component : ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
