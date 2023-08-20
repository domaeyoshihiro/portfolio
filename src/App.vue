<template>
  <Header />
  <Mv />
  <Works />
  <Skill />
  <Profile />
</template>

<script>
import Header from './components/Header.vue'
import Mv from './components/Mv.vue'
import Works from './components/Works.vue'
import Skill from './components/Skill.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    Header,
    Mv,
    Works,
    Skill,
    Profile
  }
}
</script>

<style>

</style>
