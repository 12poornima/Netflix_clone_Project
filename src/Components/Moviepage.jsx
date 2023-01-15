import React from 'react'
import { useLocation } from 'react-router-dom'

function Moviepage() {
    const location = useLocation()
    console.log(location.state)
    const [allmovie, setAllMovie] = useState({})
    const movieApi = async () => {
        let response = await axios.get(orginalUrl)
        console.log(response.data.results[6])
        setAllMovie(response.data.results[8])
    }

    useEffect(() => {
        movieApi()
    }, [])
    return (
        <div>
            <h1>
                "hai"{location.state.original_title}
            </h1>
        </div>
    )
}

export default Moviepage