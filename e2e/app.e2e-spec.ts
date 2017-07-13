import { MoraleFrontendPage } from './app.po';

describe('morale-frontend App', () => {
  let page: MoraleFrontendPage;

  beforeEach(() => {
    page = new MoraleFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
