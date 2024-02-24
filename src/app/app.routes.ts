import { Routes } from '@angular/router';
import { LoginComponent } from './compnents/login/login.component';
import { CreateAccountComponent } from './compnents/create-account/create-account.component';
import { DeleteComponent } from './compnents/delete/delete.component';

export const routes: Routes = [
    {
        path: 'view',
        loadComponent: () => import('./compnents/view/view.component').then(m => m.ViewComponent)
    }, {
        path: 'add',
        loadComponent: () => import('./compnents/add/add.component').then(m => m.AddComponent)
    }, {
        path: 'edit/:id',
        loadComponent: () => import('./compnents/edit/edit.component').then(m => m.EditComponent)
    }, {
        path: 'delete/:id',
        component: DeleteComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'signup',
        component: CreateAccountComponent
    }, {
        path: '',
        redirectTo: '/view',
        pathMatch: 'full'
    }
];
