import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'seo-update-title',
  template: '',
  styleUrls: ['./update-title.component.scss']
})
export class UpdateTitleComponent implements OnChanges {

  @Input() title?: string;
  @Input() prefix?: string;
  @Input() suffix?: string;

  constructor(private titleService: Title) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.titleService.setTitle(this.prefix + this.title + this.suffix);
  }

}
