import { Router } from "express"
import { getUsers } from "./admin.controller.js"

const router = Router()

router.get(
    "/",
    getUsers
)

export default router