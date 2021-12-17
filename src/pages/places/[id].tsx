import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { PlaceBanner } from "../../components/PlaceBanner";
import { Header } from "../../components/Header";

export default function(){
    const router = useRouter();
    const {id} = router.query;

    const [continent, setContitnent] = useState("");

    useEffect(() => {
        if(id){
            setContitnent(id.toString());
        }
        
    }, [id])

    const name = 'Europa';
    const image = 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return(
        <>
            <Header hasBackButton />
            <PlaceBanner name={name} image={image} />
        </>
    )
}