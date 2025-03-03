import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  imports:[CommonModule],
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
})
export class CounterOutputComponent  {
  count$:Observable<number>
doubleCount$ :Observable<number>
  constructor(private store:Store<{counter:number}>) {
    this.count$ = store.select(selectCount)
    this.doubleCount$ = store.select(selectDoubleCount)
  }

 
}
