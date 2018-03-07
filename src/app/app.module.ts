import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IqSelect2Module } from 'ng2-iq-select2';

import { AppRoutingModule } from './app-routing.module';

import { MainHeaderModule } from './components/main-header/main-header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ControlSidebarModule } from './components/control-sidebar/control-sidebar.module';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ActivityModule } from './pages/activity/activity.module';
import { IssuesModule } from './pages/issues/issues.module';
import { TimeEntriesModule } from './pages/time-entries/time-entries.module';
import { NewsModule } from './pages/news/news.module';
import { MyModule } from './pages/my/my.module';
import { LoginModule } from './pages/login/login.module';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { StyleService } from './services/style.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    IqSelect2Module,
    AppRoutingModule,
    MainHeaderModule,
    SidebarModule,
    ControlSidebarModule,
    DashboardModule,
    ProjectsModule,
    ActivityModule,
    IssuesModule,
    TimeEntriesModule,
    NewsModule,
    MyModule,
    LoginModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiService,
    StyleService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
