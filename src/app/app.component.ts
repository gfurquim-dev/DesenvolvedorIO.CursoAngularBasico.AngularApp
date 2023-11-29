import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './navigation/footer/footer.component';
import { MenuComponent } from './navigation/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styles: ``
})
export class AppComponent {
  title = 'DesenvolvedorIO.CursoAngularBasico.AngularApp';
}
