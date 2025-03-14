import logo from './logo.svg';
import styles from './App.module.scss';
import { firebaseConfig } from './assets/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createSignal } from 'solid-js'
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from 'firebase/firestore';



function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


  const [link, setlink] = createSignal("");


  const sendlink = async () => {
    try {

      const docRef = await addDoc(collection(db, "shortlinks"), {

        code: "teste",

        link: link(),
      });

      console.log("Document written with ID: ", docRef.id);

    } catch (e) {

      console.error("Error adding document: ", e);

    }

  }

  return (
    <div class={styles.App}>
        <div class={styles.title}>
          <h1>URL Shortening</h1>
        </div>
        <div class={styles.box}>
        <p>shortens the link for yourself</p>

        <div class={styles.inputbox}>
          <input onKeyUp={(e) => setlink(e.target.value)}/>
          <button onClick={sendlink}>Short it!</button>
        </div>
        </div>
    </div>
  );
}

export default App;
