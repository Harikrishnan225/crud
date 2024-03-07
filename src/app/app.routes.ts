import { Routes } from '@angular/router';
import { LoginComponent } from './compnents/login/login.component';
import { CreateAccountComponent } from './compnents/create-account/create-account.component';
import { ToasterComponent } from './compnents/toaster/toaster.component';
import { TeacheraddComponent } from './teacherscomponent/teacheradd/teacheradd.component';
import { TeacherviewComponent } from './teacherscomponent/teacherview/teacherview.component';
import { TeachereditComponent } from './teacherscomponent/teacheredit/teacheredit.component';
import { StandardComponent } from './standard/standard/standard.component';
import { StandardeditComponent } from './standard/standardedit/standardedit.component';
import { StandardaddComponent } from './standard/standardadd/standardadd.component';
import { ViewdetailsComponent } from './standard/viewdetails/viewdetails.component';

export const routes: Routes = [
    {
        path: 'students',
        loadComponent: () => import('./compnents/view/view.component').then(m => m.ViewComponent)
    },
    {
        path: 'students/add',
        loadComponent: () => import('./compnents/add/add.component').then(m => m.AddComponent)
    },
    {
        path: 'students/edit/:id',
        loadComponent: () => import('./compnents/edit/edit.component').then(m => m.EditComponent)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'teachers/add',
        component: TeacheraddComponent
    },
    {
        path: 'teachers',
        component: TeacherviewComponent
    },
    {
        path: 'teachers/edit/:id',
        component: TeachereditComponent
    },
    {
        path: 'standard',
        component: StandardComponent
    },
    {
        path: 'standard/add',
        component: StandardaddComponent
    },
    {
        path: 'standard/edit/:id',
        component: StandardeditComponent
    },
    {
        path: 'standard/viewdetails/:id',
        component: ViewdetailsComponent
    },
    {
        path: 'toaster',
        component: ToasterComponent
    },
    {
        path: 'signup',
        component: CreateAccountComponent
    },
    {
        path: '',
        redirectTo: '/view',
        pathMatch: 'full'
    }
];
