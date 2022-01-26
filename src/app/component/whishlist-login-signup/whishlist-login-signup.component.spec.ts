import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistLoginSignupComponent } from './whishlist-login-signup.component';

describe('WhishlistLoginSignupComponent', () => {
  let component: WhishlistLoginSignupComponent;
  let fixture: ComponentFixture<WhishlistLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishlistLoginSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhishlistLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
