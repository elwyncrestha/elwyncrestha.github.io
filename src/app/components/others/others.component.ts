import { Component, OnInit } from '@angular/core';
import { RouteConstant } from 'src/app/constants/route.constant';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  ROUTES = RouteConstant;

  constructor() { }

  ngOnInit(): void {
  }

}
