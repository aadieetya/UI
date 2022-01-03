import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcomponentComponent } from './lcomponent.component';

describe('LcomponentComponent', () => {
  let component: LcomponentComponent;
  let fixture: ComponentFixture<LcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
