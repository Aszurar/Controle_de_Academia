//  confirmationirmação se a pessoa realmente quer deletar ou não?m caso queira, aperte o ok, se não, apaerte o cancel
//     e assim entrará no if, de modo que o evento não ocorra com o preventDefalout, que ele basicamente cancela o padrão,
//     cancela o evento de submit
const formDelete = document.querySelector("#form-delete");

formDelete.addEventListener("submit", function (event) {
    const confirmation = confirm("Tem certeza que deseja deletar?");

    if (!confirmation) {
        event.preventDefault()
    }
})