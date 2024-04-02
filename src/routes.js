import { Router } from "express";
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa} from './controler/pessoa.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "api rodando"
    })
})

router.get('/pessoa', selectPessoa);
router.get('/pessoas', selectPessoas);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;