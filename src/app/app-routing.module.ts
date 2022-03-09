import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { AuthontificationGuardGuard as AuthGuardService } from './guards/authontification-guard.guard';
import { NoauthontificationGuardGuard  as NoAuthService} from './guards/noauthontification-guard.guard';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { SmartPhonesComponent } from './modules/phones/smart-phones/smart-phones.component';
import { PcAccessoiresComponent } from './component/pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './component/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './component/pc-portable/pc-portable.component';
import { ProfileService } from './services/profile/profile.service';
import {UserAccountComponent} from './component/user-account/user-account.component';


const routes: Routes = [
  { path : 'Home', component : HomeComponent
  },
  { path : 'UserAccount', component : UserAccountComponent,
    canActivate :[ProfileService]
  },
  { path : 'PcPortable', component: PcPortableComponent,},
  { path : 'PcDeBureau', component:PcBureauComponent,},
  { path : 'Accessoires',component : PcAccessoiresComponent, },
  { path : '', component : ConnexionComponent},
  { path : 'LogIn', component : ConnexionComponent},
  { path : 'Smartphones', children:[
    {path : 'Android',component : SmartPhonesComponent}
  ]},
  { path : 'stockage', loadChildren :() => import('./modules/stockage/stockage.module')
                      .then ( m => m.StockageModule)},

  { path : 'SignIn',component : InscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
