// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEd_VM36bhBQHtzWphEQJkv0FzpC8v5lU",
    authDomain: "careact-eaf8f.firebaseapp.com",
    projectId: "careact-eaf8f",
    storageBucket: "careact-eaf8f.appspot.com",
    messagingSenderId: "224755695189",
    appId: "1:224755695189:web:c30ee722bb1876d065dedc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
    const collectionRef = collection(firestore, "Productos");
    let respuesta = await getDocs(collectionRef);

    let dataDB = respuesta.docs.map((documento) => {
        let docFormateado = {
            ...documento.data(),
            id: documento.id
        };
        return docFormateado;
    });
    return dataDB;
}

export async function getItemsByCategory(category) {
    const collectionRef = collection(firestore, "Productos");
    const queryCategory = query(
        collectionRef,
        where("category", "==", category)
    );
    const respuesta = await getDocs(queryCategory);
    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = {
            ...documento.data(),
            id: documento.id
        };
        return docFormateado;
    });

    return dataDocs;
}

export async function getItem(idParam) {
    try {
        const docRef = doc(firestore, "Productos", idParam);
        const docSnapshot = await getDoc(docRef);
        return {
            ...docSnapshot.data(),
            id: docSnapshot.id
        };
    } catch (error) {
        console.error(error);
    }
}
export async function createBuyOrder(orderData){
    console.log(orderData);
    const collectionRef = collection(firestore, "orders");
    let respuesta = await addDoc(collectionRef, orderData);
    return  respuesta.id;
}


export default firestore;