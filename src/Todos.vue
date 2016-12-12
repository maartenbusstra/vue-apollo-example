<script>
export default {
  data: () => ({
    todos: [
      { id: 1, text: 'Learn Vue', completed: false },
      { id: 2, text: 'Learn GraphQL', completed: false }
    ],
  }),
  methods: {
    toggleTodo(id) {
      this.todos =
        this.todos.map(todo => !(todo.id === id) ? todo : {
          ...todo,
          completed: !todo.completed,
        });
    }
  },
}
</script>

<template>
  <div id="todos">
    <hr>
    <h2>Todos</h2>
    <div class="todos">
      <ul>
        <li
          v-for="todo in todos"
          v-on:click="toggleTodo(todo.id)"
          v-bind:class="{ completed: todo.completed }"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

  .todos {
    width: 260px;
    margin: 0 auto;
  }

  li {
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  li.completed {
    text-decoration: line-through;
    color: #bbb;
  }

</style>
