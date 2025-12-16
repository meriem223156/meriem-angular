import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormMeriemHamoudaComponent } from './user-form-meriem-hamouda.component';

describe('UserFormMeriemHamoudaComponent', () => {
  let component: UserFormMeriemHamoudaComponent;
  let fixture: ComponentFixture<UserFormMeriemHamoudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormMeriemHamoudaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormMeriemHamoudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
