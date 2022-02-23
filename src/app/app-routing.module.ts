import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthontificationGuardGuard as AuthGuardService } from './guards/authontification-guard.guard';
import { NoauthontificationGuardGuard  as NoAuthService} from './guards/noauthontification-guard.guard';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SmartPhonesComponent } from './modules/phones/smart-phones/smart-phones.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';

const routes: Routes = [
  { path : 'Home', component : HomeComponent},
  { path : 'PcPortable', component: PcPortableComponent,},
  { path : 'PcDeBureau', component:PcBureauComponent,},
  { path : 'Accessoires',component : PcAccessoiresComponent, },
  { path : '', component : ConnexionComponent},
  { path : 'Smartphones', children:[
    {path : 'Android',component : SmartPhonesComponent}
  ]},
  { path : 'stockage', loadChildren :() => import('./modules/stockage/stockage.module')
                      .then ( m => m.StockageModule)},

  { path : 'Register',component:InscriptionComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
