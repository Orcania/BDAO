import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/layout/layout.module';

import { ProposalsRoutingModule } from './proposals-routing.module';
import { ProposalsMainComponent } from './proposals-main/proposals-main.component';
import { VoteProposalComponent } from './vote-proposal/vote-proposal.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';

import { ToastrModule } from 'ngx-toastr';
import { AddressPipe } from 'src/app/shared/pipes/address/address.pipe';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    ProposalsMainComponent,
    VoteProposalComponent,
    CreateProposalComponent
  ],
  imports: [
    CommonModule,
    ProposalsRoutingModule,
    ReactiveFormsModule,

    LayoutModule,
    ToastrModule.forRoot(),
    AddressPipe,
    DragScrollModule
  ]
})
export class ProposalsModule { }
