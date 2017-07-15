import { Component } from '@angular/core';

import { EntitiesStateService } from '../entities/entities-state.service';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  private entities;

  constructor(private entitiesStateService: EntitiesStateService) {
    entitiesStateService.state$
      .subscribe(entities => {
        this.entities = [];
        Object.keys(entities).forEach(key => {
          this.entities.push(entities[key]);
        });
      });
  }

  addEntity () {
    this.entitiesStateService.addEntity({name: Date.now()});
  }

  updateEntity () {
    this.entitiesStateService.updateEntity(
      'entity-3',
      {
        name: `Updated ${Date.now()}`
      },
    );
  }
}
