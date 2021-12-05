import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DEFAULT_PROFILE } from './constants/profile.constant';
import { TABS, TAB_NAMES } from './constants/tabs.constant';
import { GitHubProfile } from './models/github-profile.model';
import { DataService } from './services/data.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  TABS = TABS;
  TAB_NAMES = TAB_NAMES;

  constructor(
    private readonly httpService: HttpService,
    public readonly ds: DataService
  ) {
  }

  ngOnInit(): void {
    this.httpService
      .get<GitHubProfile>(environment.GITHUB_URL)
      .pipe(take(1))
      .subscribe((v) => this.ds.GITHUB_PROFILE.set(v), () => this.ds.GITHUB_PROFILE.set(DEFAULT_PROFILE));
  }
}
