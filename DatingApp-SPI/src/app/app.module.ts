import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BsDropDownModule } from 'ngx-bootstrap';
import { Router, RouterModule } from '@angular/router';
// import {JwtModuleOptions} from '@auth0/angular-jwt';
// import {JwtModule} from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { appRoutes } from './routes';
import { MemberCardComponent } from './members/member-card/member-card.component';




// export function tokenGetter()
// {
//    return localStorage.getItem('token');
// }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MessagesComponent,
      MemberListComponent,
      MemberCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      // BsDropDownModule.forRoot()
      RouterModule.forRoot(appRoutes),
      //  JwtModule.forRoot({
      //     config: {
      //        tokenGetter: tokenGetter
      //        whitelistedDomains: ['localhost:5000'],
      //        blacklistedRoutes: ['localhost:5000/api/auth'] }
      //  })
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
