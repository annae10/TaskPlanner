import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private url = "Note";
  constructor(private http: HttpClient) { }

  public getNotes(): Observable<Note[]> {

    return this.http.get<Note[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateNote(note: Note): Observable<Note[]> {

    return this.http.put<Note[]>(
      `${environment.apiUrl}/${this.url}`,
      note
    );
  }

  public createNote(note: Note): Observable<Note[]> {

    return this.http.post<Note[]>(
      `${environment.apiUrl}/${this.url}`,
      note
    );
  }

  public deleteNote(note: Note): Observable<Note[]> {

    return this.http.delete<Note[]>(
      `${environment.apiUrl}/${this.url}/${note.id}`
    );
  }
}
