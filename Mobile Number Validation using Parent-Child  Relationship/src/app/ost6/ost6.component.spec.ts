import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ost6Component } from './ost6.component';

describe('Ost6Component', () => {
  let component: Ost6Component;
  let fixture: ComponentFixture<Ost6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ost6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ost6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
