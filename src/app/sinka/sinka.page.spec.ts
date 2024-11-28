import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinkaPage } from './sinka.page';

describe('SinkaPage', () => {
  let component: SinkaPage;
  let fixture: ComponentFixture<SinkaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
