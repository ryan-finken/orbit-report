import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getTypeCount(type: string): number {
    let numOfType: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type.toLowerCase() === type.toLowerCase()) {
        numOfType++;
      }
    }
    return numOfType;
  }

}
