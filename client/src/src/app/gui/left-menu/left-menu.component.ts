import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

  list = [{
    label: 'Architecture',
    items: [ {label: 'Main',
              icon: 'fa fa-home',
              description: 'Homepage',
              routerLink: '../static-document/home'},
      {label: 'Checklist',
        description: 'what it is really needed?',
        icon: 'fa fa-file-text-o', routerLink: '../static-document/app-checklist'},

      {label: 'How this site works',
        description: 'Static content with MarkDown',

        icon: 'fa fa-file-text-o', routerLink: '../static-document/how-the-pages-are-rendered'}
    ]}, {
    label: 'Spring Configuration',
    items: [
      {label: 'Compression',
        description: 'Better performance with smaller files',

        icon: 'fa fa-cog', routerLink: '../static-document/config-compression'},

      {label: 'Whitelabel (404) error',
        description: 'PathLocationStrategy',

      routerLink: '../static-document/error-controller'},
      {label: 'CORS ',
        description: 'Cross-Origin Resource Sharing',
     routerLink: '../static-document/cors-config'}

    ]},
    {
      label: 'Spring Dev',
      items: []
    },


    {
      label: 'Angular Dev',
      items: [
        {label: 'Route to the top of the page',
          description: 'fix the ng navigation issue ', icon: 'fa fa-bug', routerLink: '../static-document/angular-to-the-top'},
        {label: 'Angular Material',
          description: 'introduction to MD', icon: 'fa fa-font-awesome', routerLink: '../static-document/md-material'},
        {label: 'Typography',
          description: 'improve the readability of your app', icon: 'fa fa-font-awesome', routerLink: '../static-document/font-google'},
        {label: 'Font Awesome', icon: 'fa fa-font-awesome', routerLink: '../static-document/font-awesome'}
      ]
    },
    {
      label: 'Build',
      items: [
        {label: 'Jenkins: installation',
          icon: 'fa fa-cog', routerLink: '../static-document/jenkins-install'},
        {label: 'Jenkins: GitHub -> Cloud',
          icon: 'fa fa-cog', routerLink: '../static-document/jenkins-pipeline'},
       {label: 'Jenkins -> Docker',
         description: 'create a docker image with your jar/war',
          icon: 'fa fa-cog', routerLink: '../static-document/jenkins-pipeline-docker'}
      ]},
    {
      label: 'Quality',
      items: [
        {label: 'Coverage, is it enough?',
          description: 'Configuration of JaCoCo and SonarQube',
          icon: 'fa fa-cog', routerLink: '../static-document/quality-jacoco.md'},
      ]},
    {
      label: 'Monitoring',
      items: [
        {label: 'Actuator: is your app still up?',
          icon: '', routerLink: '../static-document/actuator-monitoring'}
      ]
    },
    {
      label: 'Documentation',
      items: [
        {label: 'Swagger',
          description: 'REST documentation',
          icon: 'ffa fa fa-book', routerLink: '../static-document/swagger-config'}
      ]},

    {
      label: 'Cheat Sheet',
      items: [
        {label: 'Docker',
          icon: '', routerLink: '../static-document/docker-cheatsheet'}
      ]
    }
  ];

  // the event is emitted and set to the parent
  @Output() onRouteClicked = new EventEmitter<String>();

  constructor(private router: Router) {}

  routeTo(routerLink: String) {

    this.onRouteClicked.emit(routerLink);
    this.router.navigate([routerLink]);
  }
}
