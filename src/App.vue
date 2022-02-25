<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
    <thing-list></thing-list>
  </div>
</template>

<script>
import ThingList from './components/ThingList'
import Header from '@/components/Header'

export default {
  name: 'App',
  data() {
    return {
      mode: 'light'
    }
  },
  components: {
    Header,
    ThingList
    
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
  
}
</script>


<style lang="scss">


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

}
.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
  
  background: white;
  color: #15202B;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
 
}
.dark {
background: #192734 ;
color: #5a5959;
}

</style>


