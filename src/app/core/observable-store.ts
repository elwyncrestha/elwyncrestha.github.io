import { BehaviorSubject, Observable } from 'rxjs';

export class ObservableStore<T> {
  private readonly _subject: BehaviorSubject<T>;
  public readonly value$: Observable<T>;

  constructor(t: T) {
    this._subject = new BehaviorSubject<T>(t);
    this.value$ = this._subject.asObservable();
  }

  public set(t: T): void {
    this._subject.next(t);
  }

  public get(): T {
    return this._subject.getValue();
  }
}
