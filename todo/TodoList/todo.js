var todoContentList = [
    {
        content: '不同于组件和 prop，事件名不存在任何自动化的大小写转换。',
        ifshow: true
    },
    {
        content: '不同于组件和 prop，事件名不存在任何自动化的大小写转换。',
        ifshow: true
    },
    {
        content: '不同于组件和 prop，事件名不存在任何自动化的大小写转换。',
        ifshow: true
    },
    {
        content: '不同于组件和 prop，事件名不存在任何自动化的大小写转换。',
        ifshow: true
    },
    {
        content: '不同于组件和 prop，事件名不存在任何自动化的大小写转换。',
        ifShow: true
    }
]

Vue.component('delete-todo-button', {
    props: ['ifshow', 'listindex'],
    template: '<button @click="deleteTodo" v-show=ifshow>点击删除</button>',
    methods: {
        deleteTodo: function () {
            console.log('listindex ---> s',this.listindex)
            console.log('删除')
        }
    }
})

Vue.component('edit-todo-button', {
    props: ['ifshow', 'listindex'],
    template: '<button @click="editTodo" v-show=ifshow>点击修改当前项内容</button>',
    methods: {
        editTodo: function () {
            console.log(':listindex=listindex', this.listindex)
            console.log('编辑')
        }
    }
})

Vue.component('todo-list', {
    props: ['todoList', 'listindex'],
    template: "<div> <li>{{todoList.content}}</li><edit-todo-button :ifshow=todoList.ifshow :listindex=listindex></edit-todo-button><delete-todo-button :ifshow=todoList.ifshow :listindex=listindex></delete-todo-button></div>",
    methods: {
        deleteTodo: function () {
            console.log('删除')
            console.log('123', $index)
        },
        editTodo: function () {
            console.log('编辑')
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        todoContentList,
        ifshow: true
    }
})