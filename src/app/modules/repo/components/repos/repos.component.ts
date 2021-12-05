import { Component, OnInit } from '@angular/core';
import { REPOS } from 'src/app/constants/repos.constant';
import { UrlConstant } from 'src/app/constants/url.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  repos: { category: string; repos: any[] }[] = [];

  constructor(
    private readonly http: HttpService,
    private readonly ds: DataService
  ) {}

  ngOnInit(): void {
    this.fetchRepos();
  }

  private async fetchRepos(): Promise<void> {
    let repoDetails = this.ds.repos.get();
    if (repoDetails.length === 0) {
      // fetch repo details
      let page = 1;
      let response;
      do {
        response = await this.http.get<any[]>(`${UrlConstant.GITHUB_REPOS}?page=${page}&per_page=100`).toPromise();
        repoDetails.push(...response);
        page++;
      } while (response.length === 100);
      this.ds.repos.set(repoDetails);
    }

    this.repos = REPOS.map(({ category, repos }) => ({
      category,
      repos: repos.map((r) => repoDetails.find((rr) => rr.name == r)),
    }));

    const categorizedRepos = REPOS.map((r) => r.repos).reduce((p, c) => p.concat(c), []);
    this.repos.push({
      category: 'Uncategorized',
      repos: repoDetails.filter((r) => !categorizedRepos.includes(r.name))
    });
  }
}
