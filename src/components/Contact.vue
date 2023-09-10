<template>
  <div class="top-contact" id="contact">
    <h2 class="top-contact-ttl">CONTACT</h2>
    <div class="top-contact-flex">
      <h3 class="top-contact-email">domae.yoshihiro@gmail.com</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact-name'
}
</script>

<style scoped>
.top-contact {
  padding-top: 80px;
}

.top-contact-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-contact-flex {
  display: flex;
  justify-content: center;
}

.top-contact-email {
  margin-left: 20px;
  font-family: 'Shippori Mincho', serif;
}
</style>