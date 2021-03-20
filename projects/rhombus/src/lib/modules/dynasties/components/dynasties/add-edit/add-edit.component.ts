import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game, GamesService } from '../../../services/games.service';
import { DynastiesAddEditDialogData } from '../dynasties.component';

@Component({
  selector: 'rh-dynasties-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class RhDynastiesAddEditComponent implements OnInit {

  dynastyForm: FormGroup;
  gameId: number;
  games: Game[];

  constructor(
    public dialogRef: MatDialogRef<RhDynastiesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DynastiesAddEditDialogData,
    private gamesService: GamesService) {
      this.games = this.gamesService.games();
      this.gameId = this.games[0].id;
  }

  ngOnInit(): void {
    this.dynastyForm = new FormGroup({
      name: new FormControl(this.data.name),
      description: new FormControl(this.data.description, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    });
   }

  onSubmit() {
    this.dialogRef.close(this.dynastyForm.value);
  }

}
