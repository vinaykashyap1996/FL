import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapappComponent } from './capapp.component';

describe('CapappComponent', () => {
  let component: CapappComponent;
  let fixture: ComponentFixture<CapappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
