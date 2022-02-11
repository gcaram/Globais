import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { COMPANY_ROUTES } from './company-routing.module';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyNewComponent } from './company-new/company-new.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    CompanyEditComponent,
    CompanyListComponent,
    CompanyViewComponent,
    CompanyNewComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PoTemplatesModule,
    PoModule,
    RouterModule.forChild(COMPANY_ROUTES)
  ]
})
export class CompanyModule { }
