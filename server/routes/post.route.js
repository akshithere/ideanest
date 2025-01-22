const express = require("express");
const router = express.Router()
const { createPostController, createPostWithMediaController, deletePostController, getAllPostsController,getAllPostsOfInvestorController,getAllPostsOfCoFounderController, getAllPostByIdController, likePostController } = require("../controllers/post.controller.js")
const upload = require("../middleware/multer.middleware");
const authMiddleware = require("../middleware/verifyToken.middleware.js");


console.log("upload middleware is: \n", upload.storage.getFilename.filename);

router.post('/posts', authMiddleware, createPostController);
router.post('/posts/with-media', authMiddleware,  upload.single(), createPostWithMediaController);
router.delete('/deletepost/:postId', authMiddleware, deletePostController);
router.get('/allposts', authMiddleware, getAllPostsController)
router.get('/posts/investors', authMiddleware, getAllPostsOfInvestorController);
router.get('/posts/cofounders', authMiddleware, getAllPostsController);
router.get('/posts/:userId', authMiddleware,getAllPostByIdController)
router.post("/like/:postId", authMiddleware, likePostController)


module.exports = router