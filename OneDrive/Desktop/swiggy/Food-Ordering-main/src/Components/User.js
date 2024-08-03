
import { useState, useEffect } from "react";

const User = () => {
    const [count, setCount] = useState(0)
    const [userInfo, setuserInfo] = useState({
        "name": "abc",
        "contact": "xyz",
        "location": "xyz",
        "avatar_url": "https//:xdf.com"
    })
    useEffect(() => {
        getUserInfo();
    }, []);

    async function getUserInfo() {
        const data = await fetch("https://api.github.com/users/Tusharpal353");
        const jsondata = await data.json()

        console.log(jsondata);
        setuserInfo({
            name: jsondata.name,
            avatar: jsondata.avatar_url,
            location: jsondata.location,
            avatar_url: jsondata.avatar_url

        })
    }

    return (
        <>  <h1>{count}</h1>
            <h2>{userInfo.name}</h2>
            <img src={userInfo.avatar_url} alt="" />
            <h2>Contact: tushar@gmail.com</h2>
            <h2>{userInfo.location}</h2>
        </>
    )
};
export default User;