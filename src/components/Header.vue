<template>
  <header class="header">
    <h1 class="header-ttl">
      <a href="/" class="header-ttl-text"> YOSHIHIRO DOMAE </a>
    </h1>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li class="header-nav-item"><a href="/" class="header-nav-item-text">TOP</a></li>
        <li class="header-nav-item"><a href="#works" class="header-nav-item-text">WORKS</a></li>
        <li class="header-nav-item"><a href="#skill" class="header-nav-item-text">SKILL</a></li>
        <li class="header-nav-item"><a href="#profile" class="header-nav-item-text">PROFILE</a></li>
        <li class="header-nav-item"><a href="#contact" class="header-nav-item-text">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header-name'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;
  background-color: #FFFFFF;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
}

.header-ttl {
  font-size: 20px;
  font-family: 'Shippori Mincho', serif;
}

.header-ttl-text {
  color: #000000;
  text-decoration: none;
}

.header-nav-list {
  display: flex;
  font-weight: bold;
  list-style: none;
}

.header-nav-item:not(:last-child) {
  margin-right: 30px;
}

.header-nav-item-text {
  color: #000000;
  text-decoration: none;
  font-family: 'Shippori Mincho', serif;
}

</style>