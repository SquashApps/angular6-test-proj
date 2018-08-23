import { Component, OnInit } from '@angular/core';
import { PersonService } from './providers/person.service';
import { People } from './people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project';
  people: People[];
  displayedColumns: string[] = ['id', 'name', 'age', 'actions'];
  constructor(private personService: PersonService) {

  }

  ngOnInit() {
    this.personService.getPeople().subscribe((data: any) => {
      this.people = data;
    });
  }

  remove(person) {
    this.people = this.people.filter((i) => i.id !== person.id);
  }
}
