import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      header: 'JAVA ECOSYSTEM',
      content: 'JAVA J2SE/J2EE frameworks, JSP, Servlets, Web containers (Tomcat, Glassfish), Hibernate, JSTL, Spring frameworks, Struts, Web Services (REST/SOAP).'
    },
    {
      header: 'DATABASE',
      content: 'Relational databases (MSSQL, MySQL, Oracle), SQL, ORM technologies, NoSQL (MongoDB, Firebase)'
    },
    {
      header: 'FRONT-END',
      content: 'Angular, React, Redux, NgRx, NGXS, Ionic, Bootstrap, JavaScript, Jquery, AJAX, HTML, HTML5, CSS, CSS3, SCSS, D3.js.'
    },
    {
      header: 'OTHER EXPOSURES',
      content: 'Proficient in core C, C++, PHP, C# ASP.NET (Entity framework), Android, NodeJS.'
    },
    {
      header: 'TESTING',
      content: 'Testing frameworks/methodologies (JUnit, TestNG, Jest, Jasmine, TDD, BDD)'
    },
    {
      header: 'VERSION CONTROL',
      content: 'GIT, SVN'
    },
    {
      header: 'CI/CD',
      content: 'Continuous Integration (Bamboo, Maven, GitHub Action, GitLab CI)'
    },
    {
      header: 'Project Management',
      content: 'GitHub, GitLab, Rally project management, experience with Atlassian tools suite (Jira, Confluence, Bamboo, Crucible)'
    },
    {
      header: 'Team',
      content: 'Experience of working in scaled SCRUM/Agile team and also startup companies.'
    },
    {
      header: 'System',
      content: 'Operating System (Windows/Linux)'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
