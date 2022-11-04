import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '../../middlewares/connectToDB';
import { jwtValidator } from '../../middlewares/jwtValidator';
import { TaskModel } from '../../models/Task';
import { DefaultMessageResponse } from '../../types/DefaultMessageResponse';
import { Task } from '../../types/Task';

const endpoint = async (req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse | any>) => {
    try {
        if (req.method === 'GET') {
            return getTasks(req,res);
        }else if (req.method === 'POST') {
            return saveTask(req,res);
        }          
    } catch (e: any) {
        console.log('Ocorreu erro ao listar tarefas do usuário:', e);
        return res.status(500).json({ error: 'Ocorreu erro ao listar tarefas do usuário, tente novamente....' });
    }
}

const getTasks = async(req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse | any>) => {
    const tasks = await TaskModel.find({userId: req.query.userId});
    return res.status(200).json(tasks);
}

const saveTask = async(req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse | any>) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Favor informar os dados para cadastro' });
    }

    const task = req.body as Task;

    if(!task.userId){
        return res.status(400).json({ error: 'Usuario não encontrado' });
    }

    if(!task.name || task.name.length < 2){
        return res.status(400).json({ error: 'Nome não é válido' });
    }

    if(!task.finishPrevisionDate || task.finishPrevisionDate.length < 8){
        return res.status(400).json({ error: 'Data de previsão não é válida' });
    }

    await TaskModel.create(task);
    return res.status(200).json({msg: 'Tarefa cadastrada com sucesso!'});
}

export default connectToDB(jwtValidator(endpoint));