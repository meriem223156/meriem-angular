import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsMeriemHamoudaComponent } from './user-details-meriem-hamouda.component';

describe('UserDetailsMeriemHamoudaComponent', () => {
  let component: UserDetailsMeriemHamoudaComponent;
  let fixture: ComponentFixture<UserDetailsMeriemHamoudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsMeriemHamoudaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsMeriemHamoudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
