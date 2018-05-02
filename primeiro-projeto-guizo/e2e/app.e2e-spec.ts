import { PrimeiroProjetoGuizo2Page } from './app.po';

describe('primeiro-projeto-guizo2 App', function() {
  let page: PrimeiroProjetoGuizo2Page;

  beforeEach(() => {
    page = new PrimeiroProjetoGuizo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
