import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";


const Userlist = () => {
    const users = useSelector((state) => state.users.data);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    if (users.length === 0) {
        return (
            <div className="user-container">
                <div className="no-users">
                    <p>You haven't added any users yet. Please do so to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="user-container">
            <h2 className="user-list-title">User List</h2>
            {/* Header Row */}
            <div className="user-header">
                <span className="header-name">Name</span>
                <span className="header-email">Email</span>
                <span className="header-delete">Delete</span>
            </div>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <span className="user-name">{user.name}</span>
                        <span className="user-email">{user.email}</span>
                        <button onClick={() => handleDelete(user.id)} className="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Userlist;
