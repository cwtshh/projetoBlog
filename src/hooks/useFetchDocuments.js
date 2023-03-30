import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { async } from "@firebase/util";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCanelled] = useState(false);


    useEffect(() => {
        async function loadData() {
            if(cancelled) return;

            setLoading(true);
            const collectionRef = await collection(db, docCollection);

            try {
                let q;

                // busca

                // dashboard

                q = await query(collectionRef, orderBy("createdAt", "desc"))

                await onSnapshot(q, (querrySnapshot) => {
                    setDocuments(
                        querrySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })

                

            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }

            
        }

        loadData();
    }, [docCollection, search, uid, cancelled])


    useEffect(() => {
        return () => setCanelled(true);
    }, []);

    return { documents, loading, error };

}