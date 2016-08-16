export class Ng2GoalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-goal-app h1')).getText();
  }
}
