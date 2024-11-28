import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossmapPage } from './bossmap.page';

describe('BossmapPage', () => {
  let component: BossmapPage;
  let fixture: ComponentFixture<BossmapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BossmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
