import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  username = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search() {
    this.http.get(`https://api.github.com/users/${ this.username }`).subscribe(x => {
      this.onSubmit.emit(x);
      this.username = '';
    });
  }

}
