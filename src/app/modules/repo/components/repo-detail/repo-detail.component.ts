import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent {
  @Input() detail: any = {};

}
