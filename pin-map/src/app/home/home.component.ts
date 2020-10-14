import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../services/firestore/firestore.service'
import { User } from 'firebase';
import { Router } from '@angular/router';
import { FormGenerator } from '../services/formGenerator/formGenerator.interface';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  templates: any[]
  user: User
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    this.templates = [];
  }

  async ngOnInit() {
    this.afAuth.authState.pipe(first()).toPromise()
    .then(user => {
      if (user){
        console.log('user1: ', user)
        this.user = user;
        this.getTemplates()
      } else {
        this.router.navigate(['/login']);
      }
    })

  }

  getTemplates() {
    this.firestoreService.getTemplates(this.user.uid)
    .then(async (templates) => {
      if(templates && templates.docs && templates.docs[0]) {
        for(const template of templates.docs) {
          const formStringify = JSON.stringify(template.data().form)
          let payload = template.data()
          payload.formToSend = formStringify
          console.log('payload: ', payload)
          this.templates.push( payload)
        }
      }
    })
  }

  openTemplateFb(form: FormGenerator[], name: string) {
    console.log('on opentemplate: ', form)
    console.log('on opentemplate name: ', name)
    this.router.navigate(['load-form',{template: form, name: name}])
  }

  async fileJsonInput() {
    let input, file, fr;

    if (typeof FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileJsonInput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      // fr.onload = receivedText;
      fr.onload = async (e) => {
        const preText = JSON.parse(e.target.result);
        this.router.navigate(['load-form',{template: JSON.stringify(preText.form), name: preText.nameTemplate}])
      }
      fr.readAsText(file);
    }
    console.log('file', file, fr);
  }

}
