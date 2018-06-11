import { NoteService } from './../note.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  notesArr: any[];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.subscription = this.noteService.getAllNotes()
      .subscribe(response => {
        this.notesArr = response;
        console.log(this.notesArr);
      })
  }

  onSubmit(f){
    this.noteService.getAllNotes()
      .push({title: f.value.title, content: f.value.content});
    f.reset();
    
  }

  deleteNote(note){
    console.log(note.$key);
    this.noteService.deleteNote(note)
      .remove();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
