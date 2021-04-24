<template>
  <div class="home">
    <topPanel ref="header"></topPanel>
    <fisrtSlide ref="fisrtSlide"></fisrtSlide>
    <stats ref="stats"></stats>
    <provide ref="provide"></provide>
    <chooseYourPlan ref="chooseYourPlan"></chooseYourPlan>
    <messages ref="messages"></messages>
    <bottomPanel ref="bottomPanel"></bottomPanel>
  </div>
</template>

<script>
import topPanel from '@/components/header';
import fisrtSlide from '@/components/fisrtSlide';
import stats from '@/components/stats';
import provide from '@/components/provide';
import chooseYourPlan from '@/components/chooseYourPlan';
import bottomPanel from '@/components/footer';
import messages from '@/components/messages';
export default {
  name: 'Home',
  components: {
    topPanel, fisrtSlide, stats, provide, chooseYourPlan, bottomPanel, messages
  }
}
</script>
