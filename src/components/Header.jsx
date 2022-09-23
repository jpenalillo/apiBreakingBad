//Contenido.jsx

const Header = (props) => {
    const handleChangeSelect = (e) =>{
        props.setOrden(e.target.value);
    }
    const handleChange = (e) =>{
        props.setText(e.target.value)
    }
    return (
            <div className="header">
            <div className="headerRight">
                <label>Filtrar por nombre o apellido:</label>
                <input name="firstName" onChange={handleChange} type="text" className="form-control input-sm bg-dark firstName text-light" placeholder="Filtrar"/>
            </div>
            <div className="headerLeft">
                <label>Ordenar por nombre:</label>
                <select name="order" id="" onChange={handleChangeSelect} className="form-control input-sm bg-dark text-light">
                    <option selected>Seleccione</option>
                    <option value="0">Ascendente</option>
                    <option value="1">Descendente</option>
                </select>
            </div>
        </div>
        );
    };

export default Header;