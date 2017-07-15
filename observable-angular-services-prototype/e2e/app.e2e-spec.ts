import { ObservableAngularServicesPrototypePage } from './app.po';

describe('observable-angular-services-prototype App', () => {
  let page: ObservableAngularServicesPrototypePage;

  beforeEach(() => {
    page = new ObservableAngularServicesPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
