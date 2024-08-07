import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { RouteConstant } from 'src/app/constants/route.constant';
import { UrlConstant } from 'src/app/constants/url.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {
  detail: any = {};
  Route = RouteConstant;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly http: HttpService,
    private readonly ds: DataService
  ) {}

  ngOnInit(): void {
    this.fetchDetails();
  }

  private fetchDetails(): void {
    const repoName = this.activatedRoute.snapshot.paramMap.get('repoName');
    if (!repoName) {
      return;
    }

    const repoDetails = this.ds.repos.get();
    const detail = repoDetails.find((r) => r.name === repoName);
    if (detail) {
      this.detail = detail;
    } else {
      this.http
      .get<any>(UrlConstant.GITHUB_REPO(repoName))
      .pipe(take(1))
      .subscribe((v) => (this.detail = v));
    }
  }
}
