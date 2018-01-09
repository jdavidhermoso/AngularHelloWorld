import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})

export class BodyComponent {
  showQuote: boolean = true;
  text: any = {
    message: 'A great power carries a great responsibility',
    author: 'Ben Parker'
  };
  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
