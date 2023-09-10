<template>
  <div class="top-contact" id="contact">
    <h2 class="top-contact-ttl">CONTACT</h2>
    <div class="top-contact-flex">
      <div>
        <p class="top-contact-txt">お仕事の依頼などは下記メールアドレスにご連絡お願いいたします。</p>
        <p class="top-contact-email">domae.yoshihiro@gmail.com</p>
      </div>
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
  padding-bottom: 40px;
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
  font-family: 'Shippori Mincho', serif;
  text-align: center;
}
</style>