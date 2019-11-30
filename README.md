[![npm version](https://badge.fury.io/js/ng-seo.svg)](https://www.npmjs.com/ng-seo)

# ng-seo

The SEO library for Angular.

## Installation

```sh
npm install ng-seo --save
```

## Usage

### Import the `SeoModule`:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SeoModule} from 'ng-seo';

@NgModule({
    imports: [
        BrowserModule,
        SeoModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### Components

Page title
```html
<seo-update-title [title]="title" [prefix]="prefix" [suffix]="suffix"></seo-update-title>
```

Metadata
```html
<seo-update-meta [name]="name" [content]="content"></seo-update-meta>
```
