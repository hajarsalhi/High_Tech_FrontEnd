import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { PcPortableComponent } from './component/pc-portable/pc-portable.component';
import { PcBureauComponent } from './component/pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './component/pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { PhonesModule } from './modules/phones/phones.module';
import { StockageModule } from './modules/stockage/stockage.module';
import { FormsModule  } from '@angular/forms';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpXsrfInterceptorService } from './interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';
import { UserAccountComponent } from './component/user-account/user-account.component';
import { ArticlesComponent } from './component/articles/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    InscriptionComponent,
    FooterComponent,
    UserAccountComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    StockageModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName : 'csrftoken'
    })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : HttpXsrfInterceptorService , multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
