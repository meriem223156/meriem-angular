import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMeriemHamoudComponent } from './user-list-meriem-hamoud.component';

describe('UserListMeriemHamoudComponent', () => {
  let component: UserListMeriemHamoudComponent;
  let fixture: ComponentFixture<UserListMeriemHamoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListMeriemHamoudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListMeriemHamoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
