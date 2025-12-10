import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: { type: String, default: "pending" }, // pending, approved
    managerEmail: String,
});

export default mongoose.model("Club", clubSchema);
