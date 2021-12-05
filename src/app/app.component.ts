import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DEFAULT_PROFILE } from './constants/profile.constant';
import { RouteConstant } from './constants/route.constant';
import { UrlConstant } from './constants/url.constant';
import { GitHubProfile } from './models/github-profile.model';
import { DataService } from './services/data.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ROUTES = RouteConstant;

  constructor(
    private readonly httpService: HttpService,
    public readonly ds: DataService
  ) {
  }

  ngOnInit(): void {
    this.httpService
      .get<GitHubProfile>(UrlConstant.GITHUB_PROFILe)
      .pipe(take(1))
      .subscribe((v) => this.ds.GITHUB_PROFILE.set(v), () => this.ds.GITHUB_PROFILE.set(DEFAULT_PROFILE));
  }
}
