import { useEffect, useState } from "react"


const profile = ()=>{
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetchMember();
    }, []);
}