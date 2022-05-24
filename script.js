window.onload = function () {
    function criarBlocos() {
        let pixelClass = document.getElementsByClassName("pixel");
        let pai = document.getElementById('pixel-board');


        for (let cont2 = 0; cont2 < 4; cont2 += 1) {
            for (let cont = 0; cont < 5; cont += 1) {
                let bloco = pixelClass[cont];
                let ItemBloco = document.createElement('div');
                ItemBloco.className = 'pixel';
                pai.appendChild(ItemBloco);
                bloco.style.marginLeft = '5px';
            }
            const paragraph = document.createElement('p');
            paragraph.className = 'paragrafo';
            pai.appendChild(paragraph);


        }
    }


    IniciandoPreto()

    function IniciandoPreto() {
        let chulambes = document.getElementsByClassName('color')[0];
        console.log(chulambes)
        chulambes.className = 'color selected';
        console.log(chulambes.className);
    }

    criarBlocos();




    function PreencherCor() {
        let chulambes = document.getElementsByClassName('pixel');
        let novaCor = 'black';

        for (let cont = 0; cont < chulambes.length; cont++) {
            let novaCor = 'black';
            let outroChulambes = document.getElementsByClassName('color')[0];
            outroChulambes.addEventListener('mouseover', function (event) {
                for (let cont = 1; cont < 4; cont += 1) {
                    let cobaia = document.getElementsByClassName('color')[cont];
                    cobaia.classList.remove('selected');
                }
                outroChulambes.className = 'color selected';
                novaCor = 'black';
            })
            let outroChulambes1 = document.getElementsByClassName('color')[1];
            outroChulambes1.addEventListener('mouseover', function (event) {
                for (let cont = 0; cont < 4; cont += 1) {
                    if (cont != 1) {
                        let cobaia = document.getElementsByClassName('color')[cont];
                        cobaia.classList.remove('selected');
                    }
                }
                outroChulambes1.className = 'color selected';
                let cor2 = document.getElementById('coral');
                novaCor = cor2.style.backgroundColor;
            })
            let outroChulambes2 = document.getElementsByClassName('color')[2];
            outroChulambes2.addEventListener('mouseover', function (event) {
                for (let cont = 0; cont < 4; cont += 1) {
                    if (cont != 2) {
                        let cobaia = document.getElementsByClassName('color')[cont];
                        cobaia.classList.remove('selected');
                    }
                }
                outroChulambes2.className = 'color selected';
                let cor3 = document.getElementById('vermelho');
                novaCor = cor3.style.backgroundColor;
            })
            let outroChulambes3 = document.getElementsByClassName('color')[3];
            outroChulambes3.addEventListener('mouseover', function (event) {
                for (let cont = 0; cont < 4; cont += 1) {
                    if (cont != 3) {
                        let cobaia = document.getElementsByClassName('color')[cont];
                        cobaia.classList.remove('selected');
                    }
                }
                outroChulambes3.className = 'color selected';
                let cor4 = document.getElementById('roxo');
                novaCor = cor4.style.backgroundColor;
            })
            let chulambes2 = document.getElementsByClassName('pixel')[cont];
            chulambes2.addEventListener('click', function (event) {
                let cor = document.getElementsByClassName('pixel')[cont];
                cor.style.backgroundColor = novaCor;
            })
        }
    }

    function botao() {
        let cobaia = document.querySelector('#botao');
        let newButton = document.createElement('button');
        let IdBotao = 'clear-board';

        newButton.innerHTML = 'Limpar';
        newButton.id = IdBotao;
        cobaia.appendChild(newButton);

        newButton.addEventListener('click', function (event) {

            let chulambes = document.getElementsByClassName('pixel');
            for (let cont = 0; cont < chulambes.length; cont++) {
                let novaCor = 'white';
                let cor = document.getElementsByClassName('pixel')[cont];
                cor.style.backgroundColor = novaCor;
                for (let cont = 0; cont < 4; cont += 1) {
                    let cobaia = document.getElementsByClassName('color')[cont];
                    cobaia.classList.remove('selected');
                }

            }

        })
    }
    botao();
    tamanho();
    function tamanho() {
        let getInput = document.querySelector('#InputBotton');
        let input = document.createElement('input');
        input.id = 'board-size';

        input.type = 'number';


        getInput.appendChild(input);


        let botton = document.createElement('button');
        botton.id = 'generate-board';
        botton.innerHTML = 'VQV';
        getInput.appendChild(botton);
        let cobaia2 = document.querySelector('#board-size');
        cobaia2.type = 'number';
        cobaia2.min = 1;
        cobaia2.max = 50;
        input.value = '';


        botton.addEventListener('click', function (event) {

            if (input.value != '') {
                if (input.value < 5) {
                    input.value = 5;
                } else
                    if (input.value > 50) {
                        input.value = 50;
                    }
                let cobaia = document.querySelectorAll(".pixel")
                for (let cont = 0; cont < cobaia.length; cont++) {
                    cobaia[cont].classList.remove('pixel')
                }

                let pixelClass = document.getElementsByClassName("pixel");
                let pai = document.getElementById('pixel-board');
                for (let cont2 = 0; cont2 < input.value; cont2 += 1) {
                    for (let cont = 0; cont < input.value; cont += 1) {
                        let bloco = pixelClass[cont];
                        let ItemBloco = document.createElement('div');
                        ItemBloco.className = 'pixel';
                        pai.appendChild(ItemBloco);
                    }
                    const paragraph = document.createElement('p');
                    paragraph.className = 'paragrafo';
                    pai.appendChild(paragraph);
                }
                PreencherCor()
                input.value = '';
            }
            else {
                alert('Board inválido!');
                input.value = '';
            }


        })


    }

    function corAleatoria() {
        let cor2 = document.getElementById('coral');
        let cor3 = document.getElementById('vermelho');
        let cor4 = document.getElementById('roxo');

        let num1 = Math.random() * 255;
        let num2 = Math.random() * 255;
        let num3 = Math.random() * 255;
        let novaCor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';


        cor2.style.backgroundColor = novaCor
        num1 = Math.random() * 255;
        num2 = Math.random() * 255;
        num3 = Math.random() * 255;
        novaCor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
        cor3.style.backgroundColor = novaCor;
        num1 = Math.random() * 255;
        num2 = Math.random() * 255;
        num3 = Math.random() * 255;
        novaCor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
        cor4.style.backgroundColor = novaCor;
        PreencherCor()
    }
    corAleatoria();
}