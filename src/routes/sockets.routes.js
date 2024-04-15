import { Router } from "express"
import { deleteProduct, getAll, getOne, insertProduct, updateProduct } from "../controllers/products.controller.js"
const router= Router()

router.get('/', getAll)
router.get('/:bc', getOne)
router.post('/', insertProduct)
router.put('/:bc', updateProduct)
router.delete('/:bc', deleteProduct)

export default router;