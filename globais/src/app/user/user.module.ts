import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_ROUTES } from './user-routing.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

import { UserNewComponent } from './user-new/user-new.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserEditComponent,
    UserListComponent,
    UserViewComponent,
    UserNewComponent
  ],
  imports: [
    CommonModule,
    PoTemplatesModule,
    PoModule,
    RouterModule.forChild(USER_ROUTES)
  ]
})
export class UserModule { }
