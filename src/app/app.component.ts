import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DEFAULT_PROFILE } from './constants/profile.constant';
import { RouteConstant } from './constants/route.constant';
import { UrlConstant } from './constants/url.constant';
import { GitHubProfile } from './models/github-profile.model';
import { DataService } from './services/data.service';
import { GoogleAnalyticsService, GOOGLE_ANALYTICS_EVENT } from './services/google-analytics.service';
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
    public readonly ds: DataService,
    private readonly router: Router,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.eventEmitter(
          GOOGLE_ANALYTICS_EVENT.EVENT_NAMES.ROUTE_CHANGE,
          GOOGLE_ANALYTICS_EVENT.EVENT_CATEGORY.ROUTER_EVENT,
          GOOGLE_ANALYTICS_EVENT.EVENT_ACTION.NAVIGATION_END,
          GOOGLE_ANALYTICS_EVENT.EVENT_LABEL.URL_AFTER_REDIRECT,
          event.urlAfterRedirects
        );
      }
    });
  }

  ngOnInit(): void {
    this.httpService
      .get<GitHubProfile>(UrlConstant.GITHUB_PROFILe)
      .pipe(take(1))
      .subscribe(
        (v) => this.ds.GITHUB_PROFILE.set(v),
        () => this.ds.GITHUB_PROFILE.set(DEFAULT_PROFILE)
      );
  }
}
