<template>
<form @submit.prevent="submitForm">
    <div class="row q-mb-md">
        <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle"
        color="primary" />
      </template>
      {{ tab | titleCase }} para acessar
    </q-banner>
    </div>
     <div class="row q-mb-md">
       <q-input
       outlined
       class="col"
       v-model="formData.email"
       ref="email"
       lazy-rules
       :rules="[val => isValidEmailAddress(val) || 'Por favor digite o email corretamente']"
       label="Email"
       stack-label />
     </div>
     <div class="row q-mb-md">
       <q-input
       outlined
       class="col"
       type="password"
       v-model="formData.password"
       ref="password"
       lazy-rules
       :rules="[val => val.length >=6 || 'Minimo de 6 caracteres']"
       label="Senha"
       stack-label />
     </div>
     <div class="row">
         <q-space></q-space>
         <q-btn
         :label="tab"
         color="primary"
         type="submit"></q-btn>
     </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmailAddress (email) {
      const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    }
  },
  filters: {
    titleCase (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>

</style>
