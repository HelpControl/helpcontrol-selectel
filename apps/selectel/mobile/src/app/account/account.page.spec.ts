import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {AccountPresenter} from '@helpcontrol/selectel/account/presentation';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPage],
      imports: [IonicModule.forRoot()],
      providers:[{provide: AccountPresenter, useFactory: ()=>{}}]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
