import { NgModule } from '@angular/core';

import { StateService } from './state/state.service';

@NgModule({
  providers: [
    StateService
  ],
})
export class SharedModule { }
