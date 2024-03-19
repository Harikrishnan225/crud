import { Routes } from '@angular/router';
import { LoginComponent } from './compnents/login/login.component';
import { ToasterComponent } from './compnents/toaster/toaster.component';
import { authGuard } from './auth.guard';
import { StudentdetailsaddComponent } from './compnents/studentdetails/studentdetailsadd/studentdetailsadd.component';
import { StudentdetailseditComponent } from './compnents/studentdetails/studentdetailsedit/studentdetailsedit.component';
import { StudentdetailsviewComponent } from './compnents/studentdetails/studentdetailsview/studentdetailsview.component';
import { EmptyscreenComponent } from './compnents/emptyscreen/emptyscreen.component';
import { StandardComponent } from './compnents/standard/standard/standard.component';
import { ViewdetailsComponent } from './compnents/standard/viewdetails/viewdetails.component';

export const routes: Routes = [
    {
        path: 'students',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/student/view/view.component').then(m => m.ViewComponent)
    },
    {
        path: 'students/add',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/student/add/add.component').then(m => m.AddComponent)
    },
    {
        path: 'students/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/student/edit/edit.component').then(m => m.EditComponent)
    },
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'studentdetails/add',
        component: StudentdetailsaddComponent
    },
    {
        path: 'studentdetails/edit/:id',
        component: StudentdetailseditComponent
    },
    {
        path: 'studentdetails',
        component: StudentdetailsviewComponent
    },
    {
        path: 'teachers/add',
        loadComponent: () => import('./compnents/teacherscomponent/teacheradd/teacheradd.component').then(m => m.TeacheraddComponent)
    },
    {
        path: 'teachers',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/teacherscomponent/teacherview/teacherview.component').then(m => m.TeacherviewComponent)
    },
    {
        path: 'teachers/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/teacherscomponent/teacheredit/teacheredit.component').then(m => m.TeachereditComponent)
    }, {
        path: 'empty',
        component: EmptyscreenComponent
    },
    {
        path: 'standard',
        canActivate: [authGuard],
        component: StandardComponent
    },
    {
        path: 'standard/add',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/standard/standardadd/standardadd.component').then(m => m.StandardaddComponent)
    },
    {
        path: 'standard/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/standard/standardedit/standardedit.component').then(m => m.StandardeditComponent)
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
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
