import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Home } from './home/home'
import { Header } from './components/header/header';
@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styles: [
    `
    main {
      padding: 16px;
    }`
  ],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
      `,
})
export class App {
  protected readonly title = signal('Prathamesh');
}
