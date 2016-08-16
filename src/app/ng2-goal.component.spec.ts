import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2GoalAppComponent } from '../app/ng2-goal.component';

beforeEachProviders(() => [Ng2GoalAppComponent]);

describe('App: Ng2Goal', () => {
  it('should create the app',
      inject([Ng2GoalAppComponent], (app: Ng2GoalAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-goal works!\'',
      inject([Ng2GoalAppComponent], (app: Ng2GoalAppComponent) => {
    expect(app.title).toEqual('ng2-goal works!');
  }));
});
