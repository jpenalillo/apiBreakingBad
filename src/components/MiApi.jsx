//Contenido.jsx
import { useState, useEffect } from "react";
import Header from '../components/Header'


const MiApi = () => {
  
const [info, setInfo] = useState([])
const [text, setText] = useState('')
const [orden,setOrden]  = useState(0)

useEffect(() => {
  consultarInformacion();
}, []);


const consultarInformacion = async () => {
  const data = await fetch("https://breakingbadapi.com/api/characters")
  const users = await data.json()
  setInfo(users)
};

return (
    <div className="AppContent">
        <Header 
            text={text}
            setText={setText}
            orden={orden}
            setOrden={setOrden}
        />
        <div className="content">
            <ul>
                        {
                            info.filter(
                                    (item) => {
                                        return item.name.toLowerCase().includes(text.toLowerCase())
                                    }
                                )
                            .sort((a,b) =>(orden ==0)?(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0):(a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
                            .map(item =>
                                <li 
                                key={item.char_id}>
                                        <div className="card">
                                            <img className="card-img-top" src={item.img} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p class="card-text">Nickname: {item.nickname}</p>
                                                <p class="card-text">Actor: {item.portrayed}</p>
                                                <p class="card-text">Occupation: {item.occupation[0]}</p>
                                                <p class="card-text">Status: {item.status}</p>
                                            </div>
                                        </div>
                                </li>
                            )
                        }
            </ul>
        </div>
    </div>
  );
};

export default MiApi;
