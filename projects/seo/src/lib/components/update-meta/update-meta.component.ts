import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'seo-update-meta',
  template: '',
  styleUrls: ['./update-meta.component.scss']
})
export class UpdateMetaComponent implements OnChanges {

  @Input() name: string;
  @Input() content: string;

  constructor(private metaService: Meta) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content === null || this.content === undefined || this.content.trim() === '') {
      this.metaService.removeTag(`name="${this.name}"`);
      return;
    }

    this.metaService.updateTag({
      name: this.name,
      content: this.content
    });
  }

}
