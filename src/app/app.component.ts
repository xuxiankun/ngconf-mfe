import { Component, Input, OnInit } from '@angular/core';
import { IncrementerService } from './services/incrementer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe1';
  internalCount = 0;
  @Input() set counter(value: number) {
	this.internalCount = value;
  }
  constructor(private incrementerService: IncrementerService) {
  }
  ngOnInit(): void {
  }
  increment(): void {
	this.internalCount++;
	this.incrementerService.broadcastCount(this.internalCount);
  }
}
