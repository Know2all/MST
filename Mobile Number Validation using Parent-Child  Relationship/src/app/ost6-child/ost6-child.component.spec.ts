import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ost6ChildComponent } from './ost6-child.component';

describe('Ost6ChildComponent', () => {
  let component: Ost6ChildComponent;
  let fixture: ComponentFixture<Ost6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ost6ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ost6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
