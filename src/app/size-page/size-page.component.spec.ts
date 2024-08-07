import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizePageComponent } from './size-page.component';

describe('SizePageComponent', () => {
  let component: SizePageComponent;
  let fixture: ComponentFixture<SizePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizePageComponent]
    });
    fixture = TestBed.createComponent(SizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
