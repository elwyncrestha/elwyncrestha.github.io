import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { ReposComponent } from './components/repos/repos.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '../clipboard/clipboard.module';


@NgModule({
  declarations: [
    ReposComponent,
    RepoDetailComponent
  ],
  imports: [
    CommonModule,
    RepoRoutingModule,
    MatIconModule,
    ClipboardModule
  ]
})
export class RepoModule { }
