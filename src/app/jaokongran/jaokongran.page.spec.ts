import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaokongranPage } from './jaokongran.page';

describe('JaokongranPage', () => {
  let component: JaokongranPage;
  let fixture: ComponentFixture<JaokongranPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JaokongranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
