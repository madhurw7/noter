import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  constructor(private db: AngularFireDatabase) {

   }

   getAllNotes(){
     return this.db.list('/notes');
   }

   addNote(){
     return this.db.list('/notes');
   }

   deleteNote(note){
     return this.db.object('/notes/' + note.$key);
   }

}
