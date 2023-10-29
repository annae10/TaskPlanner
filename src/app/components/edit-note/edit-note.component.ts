import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{
  @Input() note?: Note;
  @Output() notesUpdated = new EventEmitter<Note[]>();

  constructor(private noteService: NoteService) { }
  ngOnInit(): void { }
  updateNote(note: Note) {
    this.noteService
      .updateNote(note)
      .subscribe((notes: Note[]) => this.notesUpdated.emit(notes));
  }
  deleteNote(note: Note) {
    this.noteService
      .deleteNote(note)
      .subscribe((notes: Note[]) => this.notesUpdated.emit(notes));
  }
  createNote(note: Note) {
    this.noteService
      .createNote(note)
      .subscribe((notes: Note[]) => this.notesUpdated.emit(notes));
  }
}
