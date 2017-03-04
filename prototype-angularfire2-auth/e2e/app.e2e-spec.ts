import { BdayPartyPlannerPage } from './app.po';

describe('bday-party-planner App', function() {
  let page: BdayPartyPlannerPage;

  beforeEach(() => {
    page = new BdayPartyPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
