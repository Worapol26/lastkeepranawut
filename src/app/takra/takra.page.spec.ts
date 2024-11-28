import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakraPage } from './takra.page';

describe('TakraPage', () => {
  let component: TakraPage;
  let fixture: ComponentFixture<TakraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TakraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
