import { Livro } from './livro';

export class Biblia {
    versao: string;
    livros: Livro[];

    constructor(versao: string, data: Record<string, Livro> = {}) {
        this.versao = versao;
        this.livros = Object.values(data);
    }
}
