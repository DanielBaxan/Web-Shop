import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthComponent } from './auth.component'
import { MaterialComponentsModule } from '../shared/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
