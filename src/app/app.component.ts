import { Component } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planner.UI';
  notes: Note[] = [];
  noteToEdit?: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService
      .getNotes()
      .subscribe((result: Note[])=> (this.notes = result));
  }

  updateNoteList(notes: Note[]) {
    this.notes = notes;
  }

  initNewNote() {
    this.noteToEdit = new Note();
  }

  editNote(note: Note) {
    this.noteToEdit = note;
  }
}
