import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ChangeDetectionStrategy, Component, OnInit, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { StarWarsService } from './star-wars.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

/**
 * @title Chips in template-driven forms
 */
@Component({
  selector: 'chips-template-form-example',
  templateUrl: 'chips-template-form-example.html',
  styleUrl: 'chips-template-form-example.css',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatChipsModule, FormsModule, MatIconModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarWarsService]
})
export class ChipsTemplateFormExample implements OnInit {
  people$: Observable<any[]>;

  announcer = inject(LiveAnnouncer);
  starWarsService = inject(StarWarsService);

  ngOnInit(): void {
    this.people$ = this.starWarsService.getPeople();
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */