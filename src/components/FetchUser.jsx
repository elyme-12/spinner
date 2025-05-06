import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";


const FetchUsers = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === "loading")
        return (
            <div className="loader">
                <img src="/gojo.jpg" alt="" className="spinner-img" />
                <div className="spinner"></div>
                <div className="loading">Loading Users...</div>
            </div>
        );

    if (status === "failed") 
        return (
            <div className="error">
                Error: {error}
            </div>
        );
};

export default FetchUsers;
