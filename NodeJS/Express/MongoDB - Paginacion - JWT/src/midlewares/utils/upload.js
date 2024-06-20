const multer = require("multer");
const fs = require("fs");

const uploader = (directory) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      fs.mkdirSync(directory, { recursive: true });
      cb(null, directory);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "_" + file.originalname.replace("", "");
      cb(null, file.fieldname + "_" + uniqueSuffix);
    },
    limits: {
      fileSize: 1048576,
    },
  });

  return multer({ storage });
};

module.exports = {
  uploader,
};
