import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSpinComponent } from './loader-spin.component';

describe('LoaderSpinComponent', () => {
  let component: LoaderSpinComponent;
  let fixture: ComponentFixture<LoaderSpinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderSpinComponent]
    });
    fixture = TestBed.createComponent(LoaderSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
