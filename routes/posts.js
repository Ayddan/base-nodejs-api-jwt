const router = require('express').Router()
const verifyToken = require('./verifyToken')

router.get('/',verifyToken, (req,res)=>{
    res.json({
        posts: {
            title: 'My first post',
            description: 'random data'
        }
    })
})

module.exports = router