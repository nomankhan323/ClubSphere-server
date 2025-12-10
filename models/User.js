import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    email: { type: String, required: true },
    name: String,
    photoURL: String,
    role: { type: String, default: "member" }, // admin, manager, member
});

export default mongoose.model("User", userSchema);
