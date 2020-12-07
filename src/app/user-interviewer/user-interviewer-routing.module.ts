import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OtpComponent } from './otp/otp.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { InterviewRoomComponent } from './interview-room/interview-room.component';
import { OngoingWalkinComponent } from './ongoing-walkin/ongoing-walkin.component';
import { InterviewCandidatesRoomComponent } from './interview-candidates-room/interview-candidates-room.component';
import { TechnicalInterviewHomeComponent } from './technical-interview-home/technical-interview-home.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupDiscussionHomeComponent } from './group-discussion-home/group-discussion-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TechnicalInterviewDetailsComponent } from './technical-interview-details/technical-interview-details.component';
import { TechnicalRoomComponent } from './technical-room/technical-room.component';
import { OngoingWalkinStatusComponent } from './ongoing-walkin-status/ongoing-walkin-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutComponent } from './about/about.component';






const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'createpassword',
    component: CreatepasswordComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'layout',
    component: LayoutComponent,
    data: {
      title: 'Page 500'
    }
  },

  {
    path: 'sidebar',
    component: SidebarComponent,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  {
    path: 'header',
    component: HeaderComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'otp',
    component: OtpComponent,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Page 500'
    },
    children: [                          //<---- child components declared here
      {
          path:'home',
          component: HomeComponent
      },
      {
          path:'ongoingWalkin',
          component:OngoingWalkinComponent

      },
      {
          path:'interview_room',
          component:InterviewRoomComponent

      },
      {
          path:'interview_candidates_room',
          component:InterviewCandidatesRoomComponent

      },
      {
        path:'technical_interviewHome',
        component:TechnicalInterviewHomeComponent

      },
      {
        path:'group_discussion',
        component:GroupDiscussionComponent

      },
      {
        path:'group_discussion_home',
        component:GroupDiscussionHomeComponent

      },
      {
        path:'technical_interviewDetails',
        component:TechnicalInterviewDetailsComponent

      },
      {
        path:'technical_room',
        component:TechnicalRoomComponent

      },
      {
        path:'ongoingWalkin_status',
        component:OngoingWalkinStatusComponent

      },

      {
        path:'edit_profile',
        component:EditProfileComponent

      },
      {
        path:'about',
        component:AboutComponent

      },

      


      
      


    ]

    },
   


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterviewerRoutingModule { }
