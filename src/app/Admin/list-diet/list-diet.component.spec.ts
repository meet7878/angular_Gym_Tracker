import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDietComponent } from './list-diet.component';

describe('ListDietComponent', () => {
  let component: ListDietComponent;
  let fixture: ComponentFixture<ListDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
