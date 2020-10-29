<template>
<form>
    <div class="row q-mb-md">
        <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle"
        color="primary" />
      </template>Cadastro
    </q-banner>
    </div>
     <div class="row q-mb-md">
       <q-input
       outlined
       class="col"
       v-model="formData.email"
       label="Email"
       stack-label />
     </div>
     <div class="row q-mb-md">
       <q-input
       outlined
       class="col"
       type="password"
       v-model="formData.password"
       label="Senha"
       stack-label />
     </div>
     <div class="row">
         <q-space></q-space>
         <q-btn
         label="Cadastrar"
         color="primary"></q-btn>
     </div>
    </form>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
