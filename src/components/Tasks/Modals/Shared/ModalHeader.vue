<template>
    <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space />
    <q-btn flat
    v-close-popup
    dense
    round
    icon="close" />
    </q-card-section>
</template>

<script>
export default {
}
</script>
