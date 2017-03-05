import { MypcsCliPage } from './app.po';

describe('mypcs-cli App', function() {
  let page: MypcsCliPage;

  beforeEach(() => {
    page = new MypcsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
