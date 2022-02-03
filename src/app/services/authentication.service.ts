import { Injectable } from '@angular/core';
import { Auth} from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';


export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: Observable<firebase.User | null> | undefined;
  currentUser$ =authState(this.auth);

  constructor(private auth: Auth) {}


   login(username:string, password: string){
    return from(signInWithEmailAndPassword(this.auth,username,password)); 
   }
   

   logout(){
     return from(this.auth.signOut());
   }
}
