import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './components/repo/repo.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  {
    path: '', component: ReposComponent
  },
  {
    path: ':repoName',
    component: RepoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
