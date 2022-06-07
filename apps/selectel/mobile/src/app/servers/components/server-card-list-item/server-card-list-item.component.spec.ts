import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCardListItemComponent } from './server-card-list-item.component';

describe('ServerCardListItemComponent', () => {
  let component: ServerCardListItemComponent;
  let fixture: ComponentFixture<ServerCardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCardListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
