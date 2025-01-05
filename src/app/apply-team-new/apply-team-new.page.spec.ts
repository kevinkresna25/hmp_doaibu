import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyTeamNewPage } from './apply-team-new.page';

describe('ApplyTeamNewPage', () => {
  let component: ApplyTeamNewPage;
  let fixture: ComponentFixture<ApplyTeamNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTeamNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
