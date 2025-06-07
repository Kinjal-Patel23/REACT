import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./firestore";

const db = getFirestore(app);

function App() {

  let sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "stud"), {
        id: 1,
        name: "Kinjal"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  let getData = async () => {
    const querySnapshot = await getDocs(collection(db, "stud"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `,doc.data());
      console.log(`${doc.name} => `,doc.data());
    });
  }

  return (
    <>
      <button onClick={sendData}>SEND DATA</button>
      <button onClick={getData}>GET DATA</button>
    </>
  )
}

export default App
