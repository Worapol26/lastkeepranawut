import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Praped1Page } from './praped1.page';

describe('Praped1Page', () => {
  let component: Praped1Page;
  let fixture: ComponentFixture<Praped1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Praped1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
