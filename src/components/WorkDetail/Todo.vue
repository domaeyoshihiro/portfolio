<template>
  <div class="top-profile">
    <h2 class="top-profile-ttl">Todoアプリ</h2>
    <div class="top-profile-flex">
      <div>
        
      </div>
      <div class="">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo-name'
}
</script>

<style scoped>
.top-profile {
  padding-top: 80px;
}

.top-profile-ttl{
  text-align: center;
  font-family: 'Shippori Mincho', serif;
}

.top-profile-flex {
  display: flex;
  justify-content: center;
}

.top-profile-item-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #DCDCDC;
  margin-top: 20px;
  margin-right: 20px;
}

.top-profile-name {
  margin-left: 20px;
}

.top-profile-txt {
  margin-left: 20px;
}

</style>