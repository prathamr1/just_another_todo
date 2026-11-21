import { Component, signal, Signal} from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Greeting, Counter, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  homemsg = signal("Hello !!");

  keyUpHandler(event: KeyboardEvent){
    console.log('typing... ${event.key} key')
  }
}
