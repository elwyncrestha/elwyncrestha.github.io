import { Pipe, PipeTransform } from '@angular/core';
import { MatSnackbarService } from '../mat/services/mat-snackbar.service';

@Pipe({
  name: 'clipboardCopy',
})
export class ClipboardCopyPipe implements PipeTransform {
  constructor(private readonly snackbar: MatSnackbarService) {}

  transform(copyText: string): void {
    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(copyText).then(
            () => this.snackbar.open({ message: 'Copied to clipboard!' }),
            () =>
              this.snackbar.open({ message: 'Failed to copy to clipboard!' })
          );
        } else {
          this.snackbar.open({ message: 'Clipboard permission denied!' });
        }
      });
  }
}
