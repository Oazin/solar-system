import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInConstructionComponent } from './page-in-construction.component';

describe('PageInConstructionComponent', () => {
  let component: PageInConstructionComponent;
  let fixture: ComponentFixture<PageInConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInConstructionComponent]
    });
    fixture = TestBed.createComponent(PageInConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
