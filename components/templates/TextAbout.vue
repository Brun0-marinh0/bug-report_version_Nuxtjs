<template>
    <GridHistoric>
        <div class="gridCard" >
            <h2>Relatando Bugs com o Bugas</h2>
            <br>
            <p>
                Ao usar o <strong>Bugas</strong>, o primeiro passo é fornecer um <span>endereço de email válido.</span> Isso permite que a equipe responsável entre em contato com o usuário caso necessitem de mais informações ou para notificá-lo sobre o progresso da resolução do problema reportado. O email também serve como uma forma de rastrear e categorizar os relatórios de bugs.
            </p>
            <br>
            <p>
                O próximo passo é preencher o título do bug. É importante criar um título <span>claro e descritivo</span>, que resuma o problema de forma sucinta. Isso ajuda a equipe a identificar rapidamente a natureza do bug e priorizá-lo adequadamente.
            </p>
            <br>
            <p>
                Em seguida, é necessário fornecer uma descrição detalhada do bug encontrado. Aqui, é fundamental ser o <span>mais específico possível</span>, fornecendo informações relevantes, como as etapas para reproduzir o problema, o comportamento inesperado observado e qualquer outra informação que possa auxiliar na resolução do bug. Quanto mais detalhes forem fornecidos, mais fácil será para a equipe entender e solucionar o problema reportado.
            </p>
            <br>
            <p>
                Além disso, o <strong>Bugas</strong> permite que os usuários <span>selecionem um serviço tutilabs</span> relacionado ao bug reportado. Isso ajuda a direcionar o relatório para a equipe correta, caso haja várias equipes de suporte ou desenvolvimento envolvidas. Ao selecionar o serviço apropriado, o bug será encaminhado para as pessoas responsáveis pelo setor relacionado ao problema encontrado.
            </p>
            <br>
            <p>
                Uma das vantagens do <strong>Bugas</strong> é a capacidade de <span>adicionar imagens ao relatório de bug</span>. Às vezes, certos problemas <span>são mais facilmente compreendidos visualmente</span>. Ao anexar uma imagem relevante, os usuários podem destacar áreas problemáticas, mensagens de erro específicas ou qualquer outra coisa que possa ajudar a equipe a entender melhor o bug. As imagens podem ser anexadas diretamente ao relatório de bug, proporcionando uma experiência visual valiosa para a equipe de suporte.
            </p>
            <div class="contentImg">
                <img src="@/static/bugasIconAnimate.gif" alt="">
            </div>
        </div>
    </GridHistoric>
</template>
<style lang="scss" scoped>
    h2{
        color: var(--primary);
        font-family: var(--fontLora);
    }
    p{
        color: var(--labelInt);
    }
    span{
        color: var(--primary);
    }
    .contentImg{
        width: 100%;
        justify-content: center;
        display: flex;
    }
</style>