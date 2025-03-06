import multer, { diskStorage } from 'multer';
import path from 'path';

const storage = diskStorage({
    destination(req, file, callback) {
        const uploadPath = path.join(__dirname, '../..','public' ,'assets', 'img');
        callback(null, uploadPath);
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    }
});

export const upload = multer({
    storage: storage, limits: { fileSize: 1024 * 1024 * 10, files: 1 }, fileFilter: (req, file, cb) => {
        console.log(file.originalname)
        file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/gif"
            ? cb(null, true)
            : cb(null, false);
    }
});