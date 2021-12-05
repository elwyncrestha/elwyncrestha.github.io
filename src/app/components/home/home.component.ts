import { Component, OnInit } from '@angular/core';
import { TABS, TAB_NAMES } from 'src/app/constants/tabs.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  TABS = TABS;
  TAB_NAMES = TAB_NAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
