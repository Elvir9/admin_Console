import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUsersComponent } from './preview-users.component';

describe('PreviewUsersComponent', () => {
  let component: PreviewUsersComponent;
  let fixture: ComponentFixture<PreviewUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
