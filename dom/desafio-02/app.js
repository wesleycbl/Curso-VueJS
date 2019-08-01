new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, methods: {
        alert(){
            alert("Exibir Alerta")
        },
        keydown(event){
            this.valor = event.target.value;
        }
    },
})