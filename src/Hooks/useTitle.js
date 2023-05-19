import { useEffect } from "react"

let useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} | Wheels & Thills`;
    },[])
}

export default useTitle;