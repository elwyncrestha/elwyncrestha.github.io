import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PROFILE } from './constants/profile.constant';
import { TABS, TAB_NAMES } from './constants/tabs.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PROFILE = PROFILE;
  TABS = TABS;
  TAB_NAMES = TAB_NAMES;

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(`${PROFILE.name} | Developer Portfolio`);
  }
}
