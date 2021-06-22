import './App.css';
import {useEffect, useState} from "react";
import {People} from "./components/Peoples/People";

function App() {

    const [people, setPeople] = useState([]);
    let [page, setPage] = useState(1);

    const url = 'https://swapi.dev/api';

    const fetchPeoples = async () => {
        try {
            const res = await fetch(`${ url }/people/?page=${ page }`);
            const {results, next} = await res.json();
            setPeople(results);
        } catch (e) {
            console.log(e);
        }
    }

    const nextPage = () => {
        setPage(++page);
    };
    useEffect(() => {
        fetchPeoples();
    }, [page])

    return (
        <div>
            <People people={ people } nextPage={ nextPage }/>
        </div>
    );
}

export default App;
