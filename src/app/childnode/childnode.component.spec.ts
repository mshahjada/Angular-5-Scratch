import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildnodeComponent } from './childnode.component';

describe('ChildnodeComponent', () => {
  let component: ChildnodeComponent;
  let fixture: ComponentFixture<ChildnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
