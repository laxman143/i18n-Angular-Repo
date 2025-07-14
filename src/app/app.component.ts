import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_LOCALE_LANG_MAPPING, TranslocoDatePipe, TranslocoLocaleModule } from '@jsverse/transloco-locale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TranslocoModule,TranslocoDatePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular19-i18n';
  activeIndex:number=0;
  activeString: string = 'Radhe';
  date:Date=new Date();
  constructor(private translocoService: TranslocoService) {}
  
  ngOnInit() {
    // Set default language and handle any loading issues
    this.translocoService.setActiveLang('en');
    
    // Subscribe to language changes for debugging
    this.translocoService.langChanges$.subscribe(lang => {
      console.log('Language changed to:', lang);
    });
    
    // Test translation loading
    this.testTranslations();
  }
  
  testTranslations() {
    // Test if translations are available
    const hello = this.translocoService.translate('hello');
    console.log('Translation test - hello:', hello);
    
    // Test if the service is working
    console.log('Current language:', this.translocoService.getActiveLang());
    console.log('Available languages:', this.translocoService.getAvailableLangs());
  }
  
  switchLanguage(lang: string) {
    console.log('Switching to language:', lang);
    this.translocoService.setActiveLang(lang);
  }
  
  getCurrentLang(): string {
    return this.translocoService.getActiveLang();
  }
}
