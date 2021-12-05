import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { ReposComponent } from './components/repos/repos.component';


@NgModule({
  declarations: [
    ReposComponent
  ],
  imports: [
    CommonModule,
    RepoRoutingModule
  ]
})
export class RepoModule { }
