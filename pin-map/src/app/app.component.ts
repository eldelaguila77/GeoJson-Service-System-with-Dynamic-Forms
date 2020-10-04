import { TemplateRef, Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pin-map';
  user: User; 
  public modalRef: BsModalRef; // {1}
  constructor(
    private modalService: BsModalService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {} // {2}

  ngOnInit(){
    this.afAuth.onAuthStateChanged(user => {
      if (user){
        this.user = user;
      } else{
        this.user = null;
        this.ngZone.run(() => {
          this.router.navigate(['']);
        })
      }
    });
  }

  logout() {
    this.afAuth.signOut();
  
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
