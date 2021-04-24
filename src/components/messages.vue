<template>
    <section class="messages">
        <h2 class="main">Trusted by Thousands of Happy Customer</h2>
        <p class="main">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>

        <div class="messages__slider"></div>
    </section>
</template>
<script>
import {slider} from '@/components/messages/js/messages__slider.js'
export default {
    name: 'messages',
    methods: {},
    mounted() {
        slider('.messages__slider');
    }
}
</script>

