import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.css']
})
export class ChangeContentComponent implements OnInit {

  cards = [
    { link: 'want_to_quit', button: 'I WANT TO QUIT', caption: 'If you allow we can help you ease up your quitting and boost up your detoxification and restoration.' },
    { link: 'quited', button: 'I RECENTLY QUIT', caption: 'If you allow we can help you ease up your quitting and boost up your detoxification and restoration.' },
    { link: 'dont_want_quit', button: `I DON'T WANT TO QUIT`, caption: 'If you allow we can help you ease up your quitting and boost up your detoxification and restoration.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
