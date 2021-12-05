import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { REPOS } from 'src/app/constants/repos.constant';
import { UrlConstant } from 'src/app/constants/url.constant';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  repos: { category: string; repos: any[] }[] = [];

  constructor(private readonly http: HttpService) {}

  ngOnInit(): void {
    this.fetchRepos();
  }

  private async fetchRepos(): Promise<void> {
    // fetch repo details
    const fetchRepos$ = REPOS.map((r) => r.repos)
      .reduce((p, c) => p.concat(c), [])
      .filter((v, i, a) => v && a.indexOf(v) === i)
      .map((v) => this.http.get<any>(UrlConstant.GITHUB_REPO(v)));
    const repoResponse = await forkJoin(fetchRepos$).toPromise();

    this.repos = REPOS.map(({ category, repos }) => ({
      category,
      repos: repos.map((r) => repoResponse.find((rr) => rr.name == r)),
    }));

  }
}
