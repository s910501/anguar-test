import { AnguarTestPage } from './app.po';

describe('anguar-test App', () => {
  let page: AnguarTestPage;

  beforeEach(() => {
    page = new AnguarTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
