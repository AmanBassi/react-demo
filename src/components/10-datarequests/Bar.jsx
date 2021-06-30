import { useState, useEffect } from "react";
import axios from 'axios';
import Beer from "./Beer";

const Bar = () => {

    const [beerList, setBeerList] = useState([]);

    const [error, setError] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const loadTime = 3000;

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://api.punkapi.com/v2/beers').then((response) => {
                setLoaded(true);
                setBeerList(response.data);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            });
        }, loadTime);
    }, [beerList]);

    const beerBody = {

    }

    const postData = (id) => {
        axios.post(`https://api.punkapi.com/v2/beers${id}`, beerBody, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
            setError(error);
        })
    }

    if (error) {
        return <p>Oops, something went wrong! {error.message}</p>
    } else if (!loaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <h3>Bar</h3>
                {beerList.map((beer) => (
                    <Beer beer={beer} />
                ))}
            </div>
        )
    }
}

export default Bar
