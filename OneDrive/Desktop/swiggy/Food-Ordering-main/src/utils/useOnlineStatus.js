import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    //check offline

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });


        //check online
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        });
    }, []
    );


    //boolean value
    return onlineStatus;


};
export default useOnlineStatus;
/* import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
 */