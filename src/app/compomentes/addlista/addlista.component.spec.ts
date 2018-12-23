import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistaComponent } from './addlista.component';

describe('AddlistaComponent', () => {
  let component: AddlistaComponent;
  let fixture: ComponentFixture<AddlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
