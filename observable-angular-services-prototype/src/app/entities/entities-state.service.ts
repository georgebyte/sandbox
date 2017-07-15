import { Injectable } from '@angular/core';

import { StateService } from '../shared/state/state.service';

@Injectable()
export class EntitiesStateService extends StateService {
  private index = 0;

  constructor () {
    super();
  }

  addEntity (settings) {
    this.state['entity-' + this.index++] = {settings: settings};
    this.notify();
  }

  updateEntity (id, settings) {
    if (!this.state[id]) { return; }

    this.state[id].settings = settings;
    this.notify();
  }
}
