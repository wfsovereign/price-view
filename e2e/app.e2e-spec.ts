import { PriceViewPage } from './app.po';

describe('price-view App', () => {
  let page: PriceViewPage;

  beforeEach(() => {
    page = new PriceViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
