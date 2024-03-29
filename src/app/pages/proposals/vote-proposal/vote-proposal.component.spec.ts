import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteProposalComponent } from './vote-proposal.component';

describe('VoteProposalComponent', () => {
  let component: VoteProposalComponent;
  let fixture: ComponentFixture<VoteProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
