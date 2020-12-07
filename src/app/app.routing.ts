import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Containers
// import { DefaultLayoutComponent } from './containers';


export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: P500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
 
 
  // {
  //   path: '',
  //   component: ParentContentComponent,
  //   data: {
  //     title: 'User Management Page'
  //   },
  //   children:
  //   [
  //     {
        
  //     path: 'user-management',
  //     component: UserManagementComponent,
      
  //   }]
    // {
    //   path:"dashboard",
    //   component: DashboardComponent,
    //   outlet: "admin-contents",

    // },]
  // },
  {
    path: 'organiser',
    loadChildren: () => import('./organiser/organiser.module').then(m => m.OrganiserModule)
  },
  {
    path: 'user-interviewer',
    loadChildren: () => import('./user-interviewer/user-interviewer.module').then(m => m.UserInterviewerModule)
  },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //    
  //     {
  //       path: 'widgets',
  //       loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
  //     }
  //   ]
  // },
  // {
  //     path: 'login',
  //     component: LoginComponent,
  //     data: {
  //       title: 'Login Page'
  //     }},
  // { path: '**', component: P404Component }, 
  // { path: 'login*', component: LoginComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
