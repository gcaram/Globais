import { MainComponent } from './main/main.component';
import {  Routes } from "@angular/router";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyNewComponent } from "./company-new/company-new.component";
import { CompanyViewComponent } from "./company-view/company-view.component";


export const COMPANY_ROUTES: Routes = [  
  { path: 'company', component: MainComponent },
  { path: 'company/list', component: CompanyListComponent },  
  { path: 'company/new', component: CompanyNewComponent },
  { path: 'company/edit', component: CompanyEditComponent },
  { path: 'company/view', component: CompanyViewComponent },  
];