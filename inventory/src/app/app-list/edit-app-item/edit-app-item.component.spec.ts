import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppItemComponent } from './edit-app-item.component';

describe('EditAppItemComponent', () => {
  let component: EditAppItemComponent;
  let fixture: ComponentFixture<EditAppItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
