import * as firebase from "firebase/app";
import "firebase/analytics"
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWrRcLscTATvz_btmABiczkULY_I6SEt4",
  authDomain: "dis-embark-xvnpzx.firebaseapp.com",
  projectId: "dis-embark-xvnpzx",
  storageBucket: "dis-embark-xvnpzx.appspot.com",
  messagingSenderId: "135887322005",
  appId: "1:135887322005:web:cfe2f6c2446ceb33b9149c"
};

const app = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const db = getFirestore(app);
// Credit TAnner Helms