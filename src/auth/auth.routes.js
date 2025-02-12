import { Router } from "express"
import { registerAdmin, registerClient, loginAdmin, loginClient } from "./auth.controller.js"
import { registerValidatorAdmin, loginValidatorAdmin, registerValidatorClient, loginValidatorClient } from "../middlewares/users-validator.js"
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.post(
    "/registerAdmin",
    uploadProfilePicture.single("profilePicture"), 
    registerValidatorAdmin, 
    registerAdmin
)

router.post(
    "/loginAdmin",
    loginValidatorAdmin,
    loginAdmin
)

router.post(
    "/registerClient",
    uploadProfilePicture.single("profilePicture"), 
    registerValidatorClient, 
    registerClient
)

router.post(
    "/loginClient",
    loginValidatorClient,
    loginClient
)

export default router