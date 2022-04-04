import { useState } from "react";

const Form = ({ submitHandler }) => {

    const [data, setData] = useState({});

    const onChangeHandler = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value 
        });
    }

    return (

        <form onSubmit={(e) => submitHandler(e, data)}>
            <div className="input-group mb-3">
                <input name="username" type="text" className="form-control" placeholder="Username" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3">
                <input name="email" type="email" className="form-control" placeholder="Email" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3">
                <input name="phone" type="text" className="form-control" placeholder="Phone" onChange={onChangeHandler} required />
            </div>
            <div className="input-group mb-3 d-grid">
                <button role="submit" className="btn btn-success" >Terminar Compra</button>
            </div>
        </form>

    );
}

export default Form;