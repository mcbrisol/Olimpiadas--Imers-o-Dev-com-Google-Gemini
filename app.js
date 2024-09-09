// console.log(dados);

// console.log(dados_exercicio);

//para comentário coloca duas barras

//comando let é para criar a variável, no caso demos o nome de section

//ao chamar o resultado em section.innerHTML precisa colocar entre crases

function pesquisar() {

    //console.log('ok') comando para aparecer se o comando está funcionando (Otávio)


    let section = document.getElementById("resultados-pesquisa");
    //obtém a seção HTML onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo_pesquisa").value;

    //se o campo pesquisa não for preenchido e o botão pesquisar for acionado. Usamos dois == para comparar

    if (campoPesquisa == "") {

        section.innerHTML = "Favor digitar um nome para a pesquisa"
        return
    }

    // para cada dado dentro da lista de dados queremos que seja verificado e exibido

    // criamos e limpamos a variável resultados para receber os resultados 

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        campoPesquisa = campoPesquisa.toLowerCase();
        tags = dado.tags.toLowerCase();


        //se o valor digitado no campo pesquisa for ok
        //então faça

        console.log(descricao.includes(campoPesquisa)) //usado para testar o comando

        //no java script o ou corresponde a duas barras verticais

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `   
        
            <div class="item-resultado">
    
                <h2><a href="#" target="_blank"></a> ${dado.titulo}</h2>
    
                <p class="descricao-meta ">${dado.descricao}</p>
                   
                <a href=${dado.link} target="_blank"> Mais Informações</a>
    
            </div>
                       
        `;

        }


    }

    //!resultado significa nenhum resultado

    if (!resultados) {

        resultados = "<p> Nada foi encontrado. Por favor, digite o nome do atleta ou esporte.</p>";

    }


    //atribui o resultado encontrado ao HTML

    section.innerHTML = resultados


}


