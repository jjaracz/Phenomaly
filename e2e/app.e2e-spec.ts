import { PhenomalyPage } from './app.po';

describe('phenomaly App', () => {
  let page: PhenomalyPage;

  beforeEach(() => {
    page = new PhenomalyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
