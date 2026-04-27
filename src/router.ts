import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount } from './handlers'

const router = Router()
//Routing
router.post("/auth/register",
    body('handle').notEmpty().withMessage("El handle es obligatorio"),
    body('name').notEmpty().withMessage("El nombre es obligatorio"),
    body('email').isEmail().withMessage("El email no es valido"),
    body('password').isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
    createAccount)

export default router