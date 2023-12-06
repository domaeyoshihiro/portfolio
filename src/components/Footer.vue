<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2023 YOSHIHIRO DOMAE. All Rights Reserved.</p>
    </div>
    <div class="top-scroll">
      <img src="../assets/arrow.png" alt="arrow" class="top-scroll-img" @click="scrollToTop">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer-name',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}
</script>

<style scoped>
.container {
  font-size: 12px;
  background-color:	#C0C0C0;
  padding: 5px 0;
  text-align: center;
  width: 100%;
}

.top-scroll {
  text-align: center;
  background-color:	#808080;
  padding: 5px 0;
}

.top-scroll-img {
  width: 3%;
  cursor: pointer;
}
</style>