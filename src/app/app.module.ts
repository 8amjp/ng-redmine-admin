import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ActivityModule } from './pages/activity/activity.module';
import { IssuesModule } from './pages/issues/issues.module';
import { TimeEntriesModule } from './pages/time-entries/time-entries.module';
import { NewsModule } from './pages/news/news.module';
import { MyModule } from './pages/my/my.module';
import { LoginModule } from './pages/login/login.module';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SidebarComponent,
    InfoBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    ProjectsModule,
    ActivityModule,
    IssuesModule,
    TimeEntriesModule,
    NewsModule,
    MyModule,
    LoginModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
