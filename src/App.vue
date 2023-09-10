<template>
  <Header />
  <Mv />
  <Works />
  <Skill />
  <Profile />
  <Contact />
</template>

<script>
import Header from './components/Header.vue'
import Mv from './components/Mv.vue'
import Works from './components/Works.vue'
import Skill from './components/Skill.vue'
import Profile from './components/Profile.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Mv,
    Works,
    Skill,
    Profile,
    Contact
  }
}
</script>

<style>

</style>
