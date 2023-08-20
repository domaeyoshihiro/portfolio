<template>
  <div class="top-mv">
      <div class="wrap">
        <h1 class="top-mv-main-copy">YOSHIHIRO DOMAE</h1>
        <p class="top-mv-sub-copy">
          Web Engineer
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Mv'
}
</script>

<style scoped>
.top-mv{
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/white.jpeg) center / cover;
  color: #000;
}

.top-mv-main-copy{
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-mv-sub-copy{
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}
</style>