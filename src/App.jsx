import logo from './logo.svg';
import styles from './App.module.scss';
import { firebaseConfig } from './assets/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createSignal } from 'solid-js'
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from 'firebase/firestore';
import { generateString } from './assets/codegenerator';
import loading from './assets/loading.gif';



const isValidUrl = ( urlString )=> {
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
'((\\d{1,3}\\.){3}\\d{1,3}))'+
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+ 
'(\\#[-a-z\\d_]*)?$','i'); 
return !!urlPattern.test(urlString); 
}

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


  const [linkPhase, setlinkPhase] = createSignal(0);
  const [link, setlink] = createSignal("");
  const [errorMessage, setErrorMessage] = createSignal("");
  const [code, setCode] = createSignal("");


  const sendlink = async () => {
    setlinkPhase(0);
    setErrorMessage('')
    if (!isValidUrl(link())) {
      setErrorMessage("Url not valid!!!")
      return;
    }



    setCode(generateString(20));
    try {
      setlinkPhase(1)
      const docRef = await addDoc(collection(db, "shortlinks"), {

        code: code(),

        link: link(),
      });
      setlinkPhase(2);
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
        <h4>{errorMessage()}</h4>
        {linkPhase() == 1 ? <><div class={styles.creatinglink}>
          <img src={loading}/>
          <p>Creating Link...</p>
        </div></>: <></>}
        {linkPhase() == 2 ? <><div class={styles.linkdone}>
          <h1>Your link is done!! Here:</h1>
          <h2>{`https://s.zvide.fun/?a=${code()}`}</h2>
        </div></>: <></>}
        </div>  
    </div>
  );
}

export default App;
