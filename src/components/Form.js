import { connectFirestoreEmulator } from "firebase/firestore";
import { useState } from "react";

const Form = ({ submitHandler }) => {

    const [datos, setDatos] = useState({});

    const onChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);

        setDatos({
            ...datos,
            [e.target.name]: e.target.value 
        });

    }

    return (

        <form onSubmit={(e) => submitHandler(e, datos)}>
            <div className="input-group mb-3">
                <input name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3">
                <input name="email" type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3">
                <input name="phone" type="text" className="form-control" placeholder="Phone" aria-label="Phone" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3">
                <button role="submit" className="btn btn-success" >Terminar Compra</button>
            </div>
        </form>

    );
}

export default Form;