import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerscabComponent } from './perscab.component';

describe('PerscabComponent', () => {
  let component: PerscabComponent;
  let fixture: ComponentFixture<PerscabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerscabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerscabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
