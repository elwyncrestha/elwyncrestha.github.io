import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TABS, TAB_NAMES } from 'src/app/constants/tabs.constant';
import { GoogleAnalyticsService, GOOGLE_ANALYTICS_EVENT } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  TABS = TABS;
  TAB_NAMES = TAB_NAMES;

  constructor(
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {}

  handleTabChange(e: MatTabChangeEvent): void {
    const activeTab = Object.values(TAB_NAMES)[e.index];
    this.googleAnalyticsService.eventEmitter(
      GOOGLE_ANALYTICS_EVENT.EVENT_NAMES.HOME_TAB_SWITCH,
      GOOGLE_ANALYTICS_EVENT.EVENT_CATEGORY.MAT_TAB_EVENT,
      GOOGLE_ANALYTICS_EVENT.EVENT_ACTION.MAT_TAB_SELECTED_TAB_CHANGE,
      GOOGLE_ANALYTICS_EVENT.EVENT_LABEL.ACTIVE_TAB,
      activeTab
    );
  }
}
