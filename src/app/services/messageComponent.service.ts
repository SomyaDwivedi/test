import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private _message: string | null = null;

  setMessage(msg: string) {
    this._message = msg;
  }

  
  takeMessage(): string | null {
    const m = this._message;
    this._message = null;
    return m;
  }

  getMessage(): string | null {
    return this._message;
  }

  clear() {
    this._message = null;
  }
}
