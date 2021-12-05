import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  {
    path: '', component: ReposComponent
  },
  {
    path: ':repoName',
    component: RepoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
