import { v2 as cloudinary } from "cloudinary";
cloudinary.uploader.upload(
  "https://i.pinimg.com/originals/1d/d4/95/1dd495365d553defd699e599ce6f0f61.jpg",
  { public_id: "arnie" },
  function (error, result) {
    console.log(result);
  },
);

// Transform
const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  crop: "fill",
});
