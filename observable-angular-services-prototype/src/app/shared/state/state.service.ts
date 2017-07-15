import { BehaviorSubject } from 'rxjs/Rx';

export class StateService {
  protected state;
  private _state$;

  constructor () {
    this.state = {};
    this._state$ = new BehaviorSubject(this.state);
  }

  get state$ () {
    return this._state$.asObservable();
  }

  notify () {
    this._state$.next(Object.assign({}, this.state));
  }
}
