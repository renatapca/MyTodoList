<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
          <search></search>
          <sort></sort>
          </div>

        <p
        v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
        Não Existe Resultados com esse nome!</p>
        <q-scroll-area class="q-scroll-area-tasks">
            <notasks
            v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList">
            </notasks>
            <tasksTodo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"/>
            <tasksCompleted
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"/>
        </q-scroll-area>
          <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
            <q-btn
            @click="showAddTask = true"
            round
            class="all-pointer-events"
            color="primary"
            size="24px"
            icon="add"
        />
          </div>
    </div>
    <q-dialog
    v-model="showAddTask">
    <addtask @close="showAddTask = false"></addtask>
    </q-dialog>
  </q-page>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search'])
  },
  mounted () {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    addtask: require('components/Tasks/Modals/AddTask.vue').default,
    tasksTodo: require('components/Tasks/TasksTodo.vue').default,
    tasksCompleted: require('components/Tasks/TasksCompleted.vue').default,
    notasks: require('components/Tasks/NoTasks.vue').default,
    search: require('components/Tasks/Tools/Search.vue').default,
    sort: require('components/Tasks/Tools/Sort.vue').default
  }
}
</script>
<style>
.q-scroll-area-tasks {
  display:flex;
  flex-grow:1;
}
</style>
