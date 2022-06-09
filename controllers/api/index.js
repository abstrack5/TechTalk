const router = require('express').Router();

// const userRoutes, postRoutes, commentRoutes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');


router.use('/users', userRoutes);
router.use('/posts', postRoutes)
// router.use('/comments',)

module.exports = router;