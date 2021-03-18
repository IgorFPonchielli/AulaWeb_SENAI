$(function () {
    const todoList = {
        $container: $(".todo-list"),
        $input: $("input:text"),
        $btn: $(".btn-addTask"),

        $templateTarefa: `        
        <label href="#" class="list-group-item list-group-item-action d-flex align-items-center">
            <input type="checkbox" class="mr-2"> 
            <span class="flex-grow-1"></span>
            <button type="button" class="btn btn-danger btn-sm">Apagar</button>
        </label>
        `,

        init: function () {

            this.$input.on('keyup', (e) => {
                let tarefa = this.$input.val();
                if (e.keyCode === 13 && tarefa) {
                    this.adicionarTarefa(tarefa);
                }
            })

            this.$btn.on('click', (e) => {
                let tarefa = this.$input.val();
                if (tarefa) {
                    this.adicionarTarefa(tarefa);   
                }                            
            })

            this.$container.on('click', '.btn', (e) => {
                this.excluirTarefa($(e.target).closest(".list-group-item"));
            })

            this.$container.on('click', 'input:checkbox', (e) => {
                this.marcarTarefa($(e.target).closest(".list-group-item"));
            })
        },

        adicionarTarefa: function(tarefa) {
            //alert(tarefa);
            let $novaTarefa = $(this.$templateTarefa);
            $novaTarefa.find('span').text(tarefa);
            this.$container.append($novaTarefa);

            this.$input.val("").focus();
        },

        excluirTarefa: function(tarefaItem) {
            tarefaItem.remove();
        },

        marcarTarefa: function(tarefaItem) {
            tarefaItem.toggleClass("done")
        }

    }

    todoList.init();

});