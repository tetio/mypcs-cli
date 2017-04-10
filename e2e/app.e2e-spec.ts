import { MypcsCliPage } from './app.po';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import '../app/app'
describe('mypcs-cli App', function () {
  let page: MypcsCliPage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    page = new MypcsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
