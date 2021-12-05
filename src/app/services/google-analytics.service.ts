import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable()
export class GoogleAnalyticsService {
  constructor() {}

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
    eventValue: any
  ) {
    gtag('event', eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue,
    });
  }
}

export const GOOGLE_ANALYTICS_EVENT = {
  EVENT_NAMES: {
    HOME_TAB_SWITCH: 'home_tab_switch',
    ROUTE_CHANGE: 'route_change',
  },
  EVENT_CATEGORY: {
    MAT_TAB_EVENT: 'Mat Tab Event',
    ROUTER_EVENT: 'Router Event',
  },
  EVENT_ACTION: {
    MAT_TAB_SELECTED_TAB_CHANGE: 'Mat Tab Selected Tab Change',
    NAVIGATION_END: 'Navigation End',
  },
  EVENT_LABEL: {
    ACTIVE_TAB: 'Active Tab',
    URL_AFTER_REDIRECT: 'Url After Redirect',
  }
};
