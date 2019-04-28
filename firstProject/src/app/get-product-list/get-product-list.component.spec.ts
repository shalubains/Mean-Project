import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductListComponent } from './get-product-list.component';

describe('GetProductListComponent', () => {
  let component: GetProductListComponent;
  let fixture: ComponentFixture<GetProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
