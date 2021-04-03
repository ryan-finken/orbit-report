import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) { // ? no return type?
      response.json().then(function (data) {

        let fetchedSatellites = data.satellites; // ? no type declaration?
        for (const satelliteJSON of fetchedSatellites) {
          const satellite: object = new Satellite(
            satelliteJSON.name,
            satelliteJSON.type,
            satelliteJSON.launchDate,
            satelliteJSON.orbitType,
            satelliteJSON.operational
          );
          this.sourceList.push(satellite);
        }
      }.bind(this));
    }.bind(this));
  }
}