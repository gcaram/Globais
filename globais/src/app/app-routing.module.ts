import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(mod => mod.CompanyModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
    }
    , { path: '**', redirectTo: 'home' }
];
