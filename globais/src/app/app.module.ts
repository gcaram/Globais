import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    CompanyModule,
    PoTemplatesModule,
    PoModule,    
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
