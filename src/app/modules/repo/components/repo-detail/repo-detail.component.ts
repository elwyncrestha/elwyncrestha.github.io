import { Component, Input } from '@angular/core';
import { RouteConstant } from 'src/app/constants/route.constant';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent {
  @Input() detail: any = {};

  Routes = RouteConstant;

}
