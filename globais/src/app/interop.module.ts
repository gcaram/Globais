import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { PoModule } from "@po-ui/ng-components";
import { PoTemplatesModule } from "@po-ui/ng-templates";

import { APP_ROUTES } from "./app-routing.module";
import { CompanyModule } from "./company/company.module";
import { UserModule } from "./user/user.module";

@NgModule({
  imports: [
    BrowserModule,
    UserModule,
    CompanyModule,
    PoTemplatesModule,
    PoModule,
    BrowserAnimationsModule,
    RouterModule.forChild(APP_ROUTES)
  ]
})
export class InteropModule { }
