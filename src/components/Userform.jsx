import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser  } from "../features/users/usersSlice";
import { v4 as uuidv4 } from "uuid";


const Userform = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser ({ id: uuidv4(), name, email }));
        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h1 className='usermanage'>USER MANAGEMENT</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
            />
            <button
                type="submit"
                className="button"
            >
                Add User
            </button>
        </form>
    );
};

export default Userform;
