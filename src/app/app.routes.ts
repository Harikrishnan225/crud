import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { StudentdetailsaddComponent } from './compnents/crud/studentdetails/studentdetailsadd/studentdetailsadd.component';
import { StudentdetailseditComponent } from './compnents/crud/studentdetails/studentdetailsedit/studentdetailsedit.component';
import { StudentdetailsviewComponent } from './compnents/crud/studentdetails/studentdetailsview/studentdetailsview.component';
import { EmptyscreenComponent } from './compnents/commoncomponents/emptyscreen/emptyscreen.component';
import { StandardComponent } from './compnents/crud/standard/standard/standard.component';
import { ViewdetailsComponent } from './compnents/crud/standard/viewdetails/viewdetails.component';
import { AddteacherssqlComponent } from './compnents/seqcrud/sql-teachers/addteacherssql/addteacherssql.component';
import { ViewteacherssqlComponent } from './compnents/seqcrud/sql-teachers/viewteacherssql/viewteacherssql.component';
import { EditteacherssqlComponent } from './compnents/seqcrud/sql-teachers/editteacherssql/editteacherssql.component';
import { ToasterComponent } from './compnents/commoncomponents/toaster/toaster.component';
import { ViewstudentsqlComponent } from './compnents/seqcrud/sql-student/viewstudentsql/viewstudentsql.component';
import { EditstudentsqlComponent } from './compnents/seqcrud/sql-student/editstudentsql/editstudentsql.component';
import { AddstudentsqlComponent } from './compnents/seqcrud/sql-student/addstudentsql/addstudentsql.component';
import { SeqstandardComponent } from './compnents/seqcrud/seqstandard/seqstandard/seqstandard.component';
import { SeqaddstandardComponent } from './compnents/seqcrud/seqstandard/seqaddstandard/seqaddstandard.component';
import { SeqviewstandardComponent } from './compnents/seqcrud/seqstandard/seqviewstandard/seqviewstandard.component';
import { SeqeditstandardComponent } from './compnents/seqcrud/seqstandard/seqeditstandard/seqeditstandard.component';
import { LoginComponent } from './compnents/commoncomponents/login/login.component';

export const routes: Routes = [
    {
        path: 'students',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/student/view/view.component').then(m => m.ViewComponent)
    },
    {
        path: 'students/add',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/student/add/add.component').then(m => m.AddComponent)
    },
    {
        path: 'students/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/student/edit/edit.component').then(m => m.EditComponent)
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
        loadComponent: () => import('./compnents/crud/teacherscomponent/teacheradd/teacheradd.component').then(m => m.TeacheraddComponent)
    },
    {
        path: 'teachers',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/teacherscomponent/teacherview/teacherview.component').then(m => m.TeacherviewComponent)
    },
    {
        path: 'teachers/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/teacherscomponent/teacheredit/teacheredit.component').then(m => m.TeachereditComponent)
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
        loadComponent: () => import('./compnents/crud/standard/standardadd/standardadd.component').then(m => m.StandardaddComponent)
    },
    {
        path: 'standard/edit/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./compnents/crud/standard/standardedit/standardedit.component').then(m => m.StandardeditComponent)
    },
    {
        path: 'standard/viewdetails/:id',
        canActivate: [authGuard],
        component: ViewdetailsComponent
    },
    {
        path: 'teachers/add',
        component: AddteacherssqlComponent
    },
    {
        path: 'teachers/view',
        component: ViewteacherssqlComponent
    },
    {
        path: 'teachers/edit/:id',
        component: EditteacherssqlComponent
    },
    {
        path: 'toaster',
        component: ToasterComponent
    },
    {
        path: 'student/view',
        component: ViewstudentsqlComponent
    },
    {
        path: 'student/edit/:id',
        component: EditstudentsqlComponent
    },
    {
        path: 'student/add',
        component: AddstudentsqlComponent
    },
    {
        path: 'standards',
        component: SeqstandardComponent
    },
    {
        path: 'standard/add',
        component: SeqaddstandardComponent
    },
    {
        path: 'standard/view/:id',
        component: SeqviewstandardComponent
    },
    {
        path: 'standard/edit/:id',
        component: SeqeditstandardComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
