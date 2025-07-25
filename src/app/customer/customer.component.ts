import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-customer',
  imports: [RouterModule,TranslocoModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  standalone:true
})
export class CustomerComponent {

}
