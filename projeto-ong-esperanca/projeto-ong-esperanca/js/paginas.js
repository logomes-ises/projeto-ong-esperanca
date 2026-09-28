export const paginas = {
    inicio: `
        <section>
            <h2>Quem somos</h2>
            <p>
                A ONG Esperança é uma organização sem fins lucrativos
                que desenvolve ações sociais para ajudar pessoas em
                situação de vulnerabilidade.
            </p>
            <img
                src="/ong.webp"
                alt="Voluntários da ONG participando de uma ação social"
            >
        </section>

        <section>
            <h2>Nossa missão</h2>
            <p>
                Nossa missão é promover ações de solidariedade,
                incentivar o voluntariado e contribuir para uma
                sociedade mais inclusiva.
            </p>
        </section>

        <section>
            <h2>Contato</h2>
            <address>
                <p>E-mail: contato@ongesperanca.org</p>
                <p>Telefone: (51) 99999-9999</p>
                <p>Endereço: Rua da Esperança, 100 - Porto Alegre/RS</p>
            </address>
        </section>
    `,

    projetos: `
        <section>
            <h2>Apresentação dos projetos</h2>
            <p>
                Conheça nossas principais iniciativas e descubra como
                você pode contribuir para as ações da ONG.
            </p>
        </section>

        <section>
            <h2>Projetos sociais</h2>
            <article>
                <h3>Ações comunitárias</h3>
                <p>
                    Realizamos ações para apoiar pessoas e famílias
                    que precisam de assistência.
                </p>
            </article>
        </section>

        <section>
            <h2>Campanhas de doação</h2>
            <article>
                <h3>Doe e ajude</h3>
                <p>
                    As doações ajudam a manter os projetos sociais
                    e ampliar o atendimento da organização.
                </p>
            </article>
        </section>

        <section>
            <h2>Como doar</h2>
            <ul>
                <li>Doação financeira;</li>
                <li>Doação de alimentos;</li>
                <li>Doação de materiais.</li>
            </ul>
        </section>

        <section>
            <h2>Voluntariado</h2>
            <article>
                <h3>Seja voluntário</h3>
                <p>
                    Os voluntários podem participar das atividades
                    e colaborar diretamente com os projetos da ONG.
                </p>
                <img
                    src="/voluntariado.webp"
                    alt="Voluntários participando de uma ação da ONG"
                >
            </article>
        </section>

        <section>
            <h2>Como participar</h2>
            <p>
                Para participar das ações, acesse a página de cadastro
                e informe seus dados e sua forma de interesse.
            </p>
            <a href="#cadastro">Quero participar</a>
        </section>

        <section>
            <h2>Feedback e informações</h2>

            <h3>Badges</h3>
            <p>
                <span class="badge badge-ativo">Projeto ativo</span>
                <span class="badge badge-voluntario">Voluntariado</span>
                <span class="badge badge-doacao">Doação</span>
            </p>

            <h3>Alerta</h3>
            <div class="alert alert-sucesso" role="alert">
                Cadastro realizado com sucesso!
            </div>

            <h3>Toast</h3>
            <div class="toast" role="status">
                Obrigado por apoiar a ONG Esperança!
            </div>

            <h3>Modal</h3>
            <div class="modal-exemplo" role="dialog" aria-labelledby="titulo-modal">
                <div class="modal-conteudo">
                    <h4 id="titulo-modal">Participação confirmada</h4>
                    <p>
                        Obrigado pelo seu interesse em participar
                        das ações da ONG Esperança.
                    </p>
                    <button type="button">Fechar</button>
                </div>
            </div>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Faça parte da ONG Esperança</h2>
            <p>
                Preencha o formulário para demonstrar seu interesse
                em participar das nossas ações.
            </p>

            <form action="#" method="post" novalidate>
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Dados de contato</legend>

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(00) 00000-0000"
                        required
                    >

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="rua">Rua:</label>
                    <input type="text" id="rua" name="rua" required>

                    <label for="numero">Número:</label>
                    <input
                        type="number"
                        id="numero"
                        name="numero"
                        min="1"
                        required
                    >

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" required>
                </fieldset>

                <fieldset>
                    <legend>Forma de participação</legend>

                    <label for="participacao">
                        Como deseja participar?
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="doacao">Doação</option>
                        <option value="voluntariado">Voluntariado</option>
                    </select>
                </fieldset>

                <button type="submit">Enviar cadastro</button>
            </form>
        </section>
    `
};