import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  interests = [
    { name: 'Strategy Games', icon: 'sports_esports' },
    { name: 'Books', icon: 'library_books' },
    { name: 'Problem Solving', icon: 'auto_fix_high' },
    { name: 'Outing/Trekking', icon: 'nature_people' },
    { name: 'Physical Activities/Workouts', icon: 'fitness_center' },
    { name: 'Gadgets', icon: 'devices_other' },
  ];

  constructor(public readonly ds: DataService) { }

  ngOnInit(): void {
  }

}
