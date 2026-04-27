import type { Request, Response } from 'express'
import slug from 'slug'
import { validationResult } from 'express-validator'
import User from "../models/User";
import { hashPassword } from '../utils/auth';

export const createAccount = async (req: Request, res: Response) => {
    //console.log(req.body)
    //User.create(req.body);
    //res.json({ message: "Usuario creado" });

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    return

    const { email, password } = req.body;
    const userExist = await User.findOne({ email })

    if (userExist) {
        const error = new Error("El usuario ya esta registrado")
        return res.status(409).json({ error: error.message })
    }

    //we review if the handle already exists
    const handle = slug(req.body.handle, '')
    const handleExist = await User.findOne({ handle })

    if (handleExist) {
        const error = new Error("El nombre del usuario ya esta registrado")
        return res.status(409).json({ error: error.message })
    }

    const user = new User(req.body);
    user.password = await hashPassword(password)
    user.handle = handle
    await user.save()
    res.status(201).json({ message: "Registro creado correctamente." })
}

