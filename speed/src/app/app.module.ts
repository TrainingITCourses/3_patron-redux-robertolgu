import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { ShellContainerComponent } from './shell-container/shell-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    LaunchListComponent,
    ShellContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
