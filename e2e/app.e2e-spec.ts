import { HsPage } from './app.po';

describe('hs App', function() {
  let page: HsPage;

  beforeEach(() => {
    page = new HsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
