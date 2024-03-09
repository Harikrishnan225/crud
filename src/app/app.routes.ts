import { Routes } from '@angular/router';
import { LoginComponent } from './compnents/login/login.component';
import { ToasterComponent } from './compnents/toaster/toaster.component';
import { StandardComponent } from './standard/standard/standard.component';
import { ViewdetailsComponent } from './standard/viewdetails/viewdetails.component';
import { HeaderComponent } from './compnents/header/header.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'students',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/view/view.component').then(m => m.ViewComponent)
    },
    {
        path: 'students/add',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/add/add.component').then(m => m.AddComponent)
    },
    {
        path: 'students/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/edit/edit.component').then(m => m.EditComponent)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'teachers/add',
        canActivate: [authGuard],
        loadComponent: () => import('./teacherscomponent/teacheradd/teacheradd.component').then(m => m.TeacheraddComponent)
    },
    {
        path: 'teachers',
        canActivate: [authGuard],
        loadComponent: () => import('./teacherscomponent/teacherview/teacherview.component').then(m => m.TeacherviewComponent)
    },
    {
        path: 'teachers/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./teacherscomponent/teacheredit/teacheredit.component').then(m => m.TeachereditComponent)
    },
    {
        path: 'standard',
        canActivate: [authGuard],
        component: StandardComponent
    },
    {
        path: 'standard/add',
        canActivate: [authGuard],
        loadComponent: () => import('./standard/standardadd/standardadd.component').then(m => m.StandardaddComponent)
    },
    {
        path: 'standard/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./standard/standardedit/standardedit.component').then(m => m.StandardeditComponent)
    },
    {
        path: 'standard/viewdetails/:id',
        canActivate: [authGuard],
        component: ViewdetailsComponent
    },
    {
        path: 'toaster',
        component: ToasterComponent
    },
    {
        path: 'header',
        canActivate: [authGuard],
        component: HeaderComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
