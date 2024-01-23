import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [FilterComponent,],
  providers: [ServiceService],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss'
})
export class CharactersPageComponent {

  characters: any;

  filters:any;
  ServiceService: any;

  constructor(private charactersService: ServiceService){
    this.getCharacters(1, {});
  }

  getCharacters(page:number, filters:any){
    this.filters = filters;
    this.ServiceService.getCharacters(page, filters).subscribe((res:any) => {
      this.characters = res.results;
    })
  }

}
