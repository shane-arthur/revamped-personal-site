import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { LinkDefinition } from '../../models/link-definition';
import { MetaLinkService } from '../../services/meta-link.service';

@Component({
  selector: 'app-page-seo',
  templateUrl: './seo-page.component.html',
  styleUrls: ['./seo-page.component.scss']
})
export class SeoPageComponent implements OnInit {
  @Input() JsonLDs: any[];
  @Input() tags: MetaDefinition[];
  @Input() title: string;
  @Input() metaLinks?: LinkDefinition[];
  constructor(
      public meta: Meta,
      public meta_title: Title,
      public metaLinkService: MetaLinkService
  ) {}

  ngOnInit() {
      this.meta_title.setTitle(this.title);
      this.meta.addTags(this.tags);
      if (this.metaLinks && this.metaLinks.length > 0) {
          this.metaLinks.forEach(tag => {
              this.metaLinkService.addTag(tag, true);
          });
      }
  }
}
