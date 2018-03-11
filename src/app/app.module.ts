import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MainHeaderModule } from './components/main-header/main-header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ControlSidebarModule } from './components/control-sidebar/control-sidebar.module';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { IssuesModule } from './pages/issues/issues.module';
import { MyModule } from './pages/my/my.module';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { StyleService } from './services/style.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainHeaderModule,
    SidebarModule,
    ControlSidebarModule,
    DashboardModule,
    ProjectsModule,
    IssuesModule,
    MyModule,
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
