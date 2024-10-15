const app = Vue.createApp({
    data() {
        return {
            title: "Заметки",
            newTitle: "",
            newTodos: [],
            updateTitle: "",
        };
    },
    methods: {
        addRowTodo() {
            if (this.newTitle !== "") {
                this.newTodos.push({ name: this.newTitle, decor: false });
                this.newTitle = "";
            }
        },
        removeRowTodo(index) {
            this.newTodos.splice(index, 1);
        },
        updateRowTodo(index) {
            this.newTodos[index].decor = true;
        },
    },
});
app.mount("#app");
