import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterviewerRoutingModule } from './user-interviewer-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { OngoingWalkinComponent } from './ongoing-walkin/ongoing-walkin.component';
import { InterviewRoomComponent } from './interview-room/interview-room.component';
import { InterviewCandidatesRoomComponent } from './interview-candidates-room/interview-candidates-room.component';
import { TechnicalInterviewHomeComponent } from './technical-interview-home/technical-interview-home.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupDiscussionHomeComponent } from './group-discussion-home/group-discussion-home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {Pipe,PipeTransform} from "@angular/core";
import { SearchPipe } from './search.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select/';
import { NguCarouselModule } from '@ngu/carousel';







// import { SearchPipe } from '.search.pipe';






import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,

} from '@coreui/angular';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TechnicalInterviewDetailsComponent } from './technical-interview-details/technical-interview-details.component';
import { TechnicalRoomComponent } from './technical-room/technical-room.component';
import { OngoingWalkinStatusComponent } from './ongoing-walkin-status/ongoing-walkin-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgotpasswordComponent, CreatepasswordComponent, LayoutComponent, HomeComponent, HeaderComponent, FooterComponent, OtpComponent, SidebarComponent, DefaultLayoutComponent, OngoingWalkinComponent, InterviewRoomComponent, InterviewCandidatesRoomComponent, TechnicalInterviewHomeComponent, GroupDiscussionComponent, GroupDiscussionHomeComponent, RightSidebarComponent, TechnicalInterviewDetailsComponent,SearchPipe, TechnicalRoomComponent, OngoingWalkinStatusComponent, EditProfileComponent, AboutComponent],
  imports: [
    CommonModule,
    UserInterviewerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    MatToolbarModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    NguCarouselModule,
    
  ]
})



export class UserInterviewerModule { }
