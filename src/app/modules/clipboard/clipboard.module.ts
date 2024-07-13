import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardCopyDirective } from './clipboard-copy.directive';
import { ClipboardCopyPipe } from './clipboard-copy.pipe';



@NgModule({
  declarations: [
    ClipboardCopyPipe,
    ClipboardCopyDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ClipboardCopyPipe,
    ClipboardCopyDirective,
  ],
  providers: [ClipboardCopyPipe]
})
export class ClipboardModule { }
