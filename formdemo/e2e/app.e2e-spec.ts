import { FormdemoPage } from './app.po';

describe('formdemo App', () => {
  let page: FormdemoPage;

  beforeEach(() => {
    page = new FormdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
