import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { IssuesModule } from './pages/issues/issues.module';
import { IssueModule } from './pages/issue/issue.module';
import { MyModule } from './pages/my/my.module';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { StyleService } from './services/style.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    NavbarModule,
    SidebarModule,
    DashboardModule,
    ProjectsModule,
    IssuesModule,
    IssueModule,
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
