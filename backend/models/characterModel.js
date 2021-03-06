import mongoose from "mongoose";

const characterSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  powerstats: {
    type: Object,
    required: true,
  },
  appearance: {
    type: Object,
    required: true,
  },
  biography: {
    type: Object,
    required: true,
  },
  work: {
    type: Object,
    required: true,
  },
  connections: {
    type: Object,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
