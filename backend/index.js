import express from 'express'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from './config.js';



const app = express()
const port = 8080
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);


const getCollectionData = async () => {
    try {
      const Col = collection(db, "shortlinks");
      const Snapshot = await getDocs(Col);
      const List = Snapshot.docs.map(doc => doc.data());
      return List;
    } catch (e) {
    console.error("Error getting documents: ", e);
    return null;
    }
  };
  

app.get('/:code', async (req, res) => {
    await getCollectionData().then(
        data => {
            const [resultado] = data.filter((item) => item.code == req.params.code)
            if (resultado == null) {
                res.send('404 Error: Short link not found!');
            }
            else {
                res.redirect(resultado.link)
            }
        
        }
    )
    // res.send('Redirecting...')
})
app.get('/', (req, res) => {
    res.send('Paste the code after the slash "/" for redirection!!  ')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

