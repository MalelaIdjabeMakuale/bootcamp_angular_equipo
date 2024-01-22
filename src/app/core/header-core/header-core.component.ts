import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-header-core',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header-core.component.html',
  styleUrl: './header-core.component.css'
})
export class HeaderCoreComponent {

}
