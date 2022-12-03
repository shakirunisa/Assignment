import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { shareRoutes } from 'libs/shared/shared.routes';

@NgModule({
  imports: [CommonModule, MenubarModule,
    RouterModule.forChild(shareRoutes)],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {}
