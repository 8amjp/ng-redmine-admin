import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivityComponent } from './activity/activity.component';
import { IssuesComponent } from './issues/issues.component';
import { TimeEntriesComponent } from './time-entries/time-entries.component';
import { NewsComponent } from './news/news.component';
import { MyComponent } from './my/my.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IssueFormComponent } from './issues/issue-form/issue-form.component';
import { MyIssuesComponent } from './my/my-issues/my-issues.component';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ActivityComponent,
    IssuesComponent,
    TimeEntriesComponent,
    NewsComponent,
    MyComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    IssueFormComponent,
    MyIssuesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
