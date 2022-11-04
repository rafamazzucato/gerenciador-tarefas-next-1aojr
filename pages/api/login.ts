import type { NextApiRequest, NextApiResponse } from 'next';
import { DefaultMessageResponse } from '../../types/DefaultMessageResponse';

export default function (requisicao: NextApiRequest, resposta: NextApiResponse<DefaultMessageResponse>) {
    try {
        if (requisicao.method !== 'POST') {
            return resposta.status(405).json({ error: 'Método informado não existe' });
        }

        if (!requisicao.body) {
            return resposta.status(400).json({ error: 'Favor informar os dados para autenticação' });
        }

        const { login, password } = requisicao.body;

        if (login === 'teste@teste.com'
            || password === 'teste@123') {
            return resposta.status(200).json({ msg: 'Usuário autenticado!' });
        }

        return resposta.status(400).json({ error: 'Usuário e senha não conferem' });
    } catch (e: any) {
        console.log('Ocorreu erro ao logar usuário:', e);
        return resposta.status(500).json({ error: 'Ocorreu erro ao logar usuário, tente novamente....' });
    }
}