//calcula o valor total
function calculateTip(event) {

    event.preventDefault(); // não permite o refresh da página

    // sintaxe nova no js de variaveis 
    // recuperando os valores dos campos
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os campos!");
        return; // parando função
    }

    if (numOfPeople == "" | numOfPeople <= 1) {

        numOfPeople = 1;
        document.getElementById('each').style.display = "none";

    } else {
        document.getElementById('each').style.display = "block";
    }


    // calculo
    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2); // formatando valor

    // exibindo valor 
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

// escondendo a div 
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// adicionando evento ao objeto HTML - submit
document.getElementById('tipsForm').addEventListener('submit', calculateTip);