import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { UrlConstant } from 'src/app/constants/url.constant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent implements OnInit {
  @Input() detail: any = {};
  @Input() fetchDetailBasedOnRoute = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly http: HttpService
  ) {}

  ngOnInit(): void {
    if (this.fetchDetailBasedOnRoute) {
      const repoName = this.activatedRoute.snapshot.paramMap.get('repoName');
      if (repoName) {
        this.http
          .get<any>(UrlConstant.GITHUB_REPO(repoName))
          .pipe(take(1))
          .subscribe((v) => (this.detail = v));
      }
    }
  }
}
