import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterCoreComponent } from './core/footer-core/footer-core.component';
import { HeaderCoreComponent } from './core/header-core/header-core.component';
import { DetalleComponent } from './components/detalle/detalle.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FooterCoreComponent,HeaderCoreComponent, RouterOutlet, DetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_equipos';
}
