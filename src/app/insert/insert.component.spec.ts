import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertComponents } from './forms.component';

describe('InsertComponents', () => {
  let component: InsertComponents;
  let fixture: ComponentFixture<InsertComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});