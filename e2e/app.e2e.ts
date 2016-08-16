import { Ng2GoalPage } from './app.po';

describe('ng2-goal App', function() {
  let page: Ng2GoalPage;

  beforeEach(() => {
    page = new Ng2GoalPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-goal works!');
  });
});
