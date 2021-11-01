import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class MatSnackbarService {
  config: MatSnackBarConfig = { duration: 5 * 1000 };

  constructor(private readonly _snackBar: MatSnackBar) {}

  open(v: { message: string; action?: string | undefined }): void {
    const { message, action } = v;
    this._snackBar.open(message, action, this.config);
  }
}
