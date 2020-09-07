import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
// import { HeaderPanelComponent} from './header-panel/header-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreviewUsersComponent } from './preview-users/preview-users.component';

@NgModule({
  declarations: [DashboardComponent, PreviewUsersComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatCardModule,
    HttpClientModule,
  ],
})
export class AdminPanelModule {}
