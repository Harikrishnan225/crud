import { Routes } from '@angular/router';
import { LoginComponent } from './compnents/login/login.component';
import { CreateAccountComponent } from './compnents/create-account/create-account.component';

export const routes: Routes = [
    {
        path: 'view',
        loadComponent: () => import('./compnents/view/view.component').then(m => m.ViewComponent)
    }, {
        path: 'add',
        loadComponent: () => import('./compnents/add/add.component').then(m => m.AddComponent)
    }, {
        path: 'edit',
        loadComponent: () => import('./compnents/edit/edit.component').then(m => m.EditComponent)
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'signup',
        component: CreateAccountComponent
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
