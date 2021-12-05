import { Directive, HostListener, Input } from '@angular/core';
import { ClipboardCopyPipe } from './clipboard-copy.pipe';

@Directive({
  selector: '[appClipboardCopy]'
})
export class ClipboardCopyDirective {

  @Input() copyText!: string;

  constructor(private readonly clipboardCopyPipe: ClipboardCopyPipe) {}

  @HostListener('click')
  onClick() {
    this.clipboardCopyPipe.transform(this.copyText);
  }

}
