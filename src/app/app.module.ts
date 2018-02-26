import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivityComponent } from './activity/activity.component';
import { IssuesComponent } from './issues/issues.component';
import { TimeEntriesComponent } from './time-entries/time-entries.component';
import { NewsComponent } from './news/news.component';
import { MyComponent } from './my/my.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ActivityComponent,
    IssuesComponent,
    TimeEntriesComponent,
    NewsComponent,
    MyComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
