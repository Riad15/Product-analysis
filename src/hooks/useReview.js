import { useEffect, useState } from "react"

const useReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('Users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers];
}
export default useReview;