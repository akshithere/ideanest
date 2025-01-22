const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        const ext=path.extname(file.originalname);
        let filename = `${file.fieldname}-${Date.now()}${ext}`;
        file.generatedFilename = filename; 
        cb(null,filename)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload;