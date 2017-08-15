import { AngularFirstPage } from './app.po';

describe('angular-first App', () => {
  let page: AngularFirstPage;

  beforeEach(() => {
    page = new AngularFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
