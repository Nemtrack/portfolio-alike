import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectsGit: Project[] = [
    new Project(
      'Appointment booking',
      'https://github.com/Nemtrack/appointment-booking2'
    ),
    new Project(
      'Időjárás',
      'https://github.com/Nemtrack/Uni-Weather-app-project'
    ),
    new Project(
      'TreePlanter.io',
      'https://github.com/Nemtrack/SzFMMini-front-end'
    ),
    new Project(
      'Időjárás TF',
      'https://github.com/Exanim/TensorFlow-Weather-Prediction'
    ),
    new Project(
      'Movie/Series Sorter',
      'https://github.com/Nemtrack/netflix-frontend'
    ),
  ];

  projectsWeb: Project[] = [
    new Project(
      'Appointment booking',
      'https://web.unideb.hu/d3dn7t19990413/appointment-booking'
    ),
    new Project(
      'Időjárás',
      'https://web.unideb.hu/d3dn7t19990413/weather-app/'
    ),
    new Project(
      'TreePlanter.io',
      'https://web.unideb.hu/d3dn7t19990413/tree-planter/'
    ),
    new Project(
      'Movie/Series Sorter',
      'https://web.unideb.hu/d3dn7t19990413/movies/'
    ),
  ];
}
