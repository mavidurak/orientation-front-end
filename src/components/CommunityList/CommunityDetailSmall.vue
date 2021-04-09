<template>
  <div>
    <div class="card mb-3" style="max-width: 800px">
      <div class="row g-0">
        <div class="col-md-4" id="img">
          <img src="" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['grupismi'],
};
</script>
<style lang="scss">
.card{
  position: relative;
  left: 500px;
  height: 100px;
  width: 700px;
  #img{
    width: 100px;
  }
}
</style>
