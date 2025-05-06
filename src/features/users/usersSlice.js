import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const staticUsers = [
    { id: 1, name: 'Yuji Itadori', email: 'yuji@jujutsukaisen.com' },
    { id: 2, name: 'Megumi Fushiguro', email: 'megumi@jujutsukaisen.com' },
    { id: 3, name: 'Nobara Kugisaki', email: 'nobara@jujutsukaisen.com' },
    { id: 4, name: 'Satoru Gojo', email: 'gojo@jujutsukaisen.com' },
    { id: 5, name: 'Suguru Geto', email: 'geto@jujutsukaisen.com' },
    { id: 6, name: 'Kinji Hakari', email: 'kinji@jujutsukaisen.com' },
    { id: 7, name: 'Sung Jin-Woo', email: 'jinwoo@manhwa.com' },
    { id: 8, name: 'Cha Hae-In', email: 'haein@manhwa.com' },
    { id: 9, name: 'Go Gun-Hee', email: 'gunhee@manhwa.com' },
    { id: 10, name: 'Jin-Ah', email: 'jinah@manhwa.com' },
    { id: 11, name: 'Go Gun-Hee', email: 'gunhee2@manhwa.com' },
    { id: 12, name: 'Kang Tae-Sik', email: 'taesik@manhwa.com' },
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await new Promise((resolve) => 
        setTimeout(() => resolve(staticUsers), 2000)
    );
});
const usersSlice = createSlice({
    name: "users",
    initialState: { data: [], status: "idle", error: null },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;