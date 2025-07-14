import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslocoLoader, Translation } from '@jsverse/transloco';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    // Try multiple paths for translation files
    const paths = [
      `/assets/i18n/${lang}.json`,
      `/${lang}.json`,
      `/assets/${lang}.json`
    ];
    
    // Try the first path, if it fails, try the next one
    return this.http.get<Translation>(paths[0]).pipe(
      catchError(() => this.http.get<Translation>(paths[1]).pipe(
        catchError(() => this.http.get<Translation>(paths[2]))
      ))
    );
  }
}