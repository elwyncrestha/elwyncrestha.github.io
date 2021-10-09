import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: 'SOFTWARE ENGINEER',
      duration: '2020 to Now',
      employer: 'COTIVITI NEPAL PVT. LTD.',
      location: 'Hattisar, Kathmandu, Nepal',
      description:
        'Working as a Java developer in Medical Intelligence software (a health analytics software that analyzes risks in fields like healthcare, insurance).',
    },
    {
      title: 'SOFTWARE DEVELOPER',
      duration: '2018 to 2020',
      employer: 'SB SOLUTIONS PVT. LTD',
      location: 'Jamal, Kathmandu, Nepal',
      description:
        'Key contributor to startup company’s fast evolution from selling a niche product to offering a full solutions to the Nepal\'s financial market.',
    },
    {
      title: 'OFFSHORE DEVELOPER SUPPORT',
      duration: '2018 to Now',
      employer: 'N/A',
      location: 'Texas, US based',
      description:
        'Supported development work for multiple offshore client in US on NLP (Natural Langugage Processing) project, airline baggage system, fueling systems, etc.',
    },
    {
      title: 'FREELANCING',
      duration: 'Since 2018',
      employer: 'N/A',
      location: 'N/A',
      description:
        'Designed and developed web apps for offshore clients based on US, student portfolios, etc.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
