import { Router } from 'express'

const router = Router()
//Routing
router.get("/", (req, res) => {
    res.send("Hello world from express");
})

router.get("/nosotros", (req, res) => {
    res.send("Hello world from nosotros");
})


router.get("/blog", (req, res) => {
    res.send("Hello world from blog");
})

export default router