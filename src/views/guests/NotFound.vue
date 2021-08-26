<template>
  <div>
    <div class="page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="not-found">
                <h1 class="text-center">404</h1>
              </div>
              <div class="box">
                <h3>
                Look like you're lost
                </h3>
                <p>the page you are looking for not avaible!</p>
                <a href="/home" class="link">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang='scss' scoped >
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');

.page{
  padding:40px 0;
  background:#fff;
  padding-left: 200px;
  font-family: 'Arvo', serif;
  color: rgb(0, 0, 0);
}

.not-found{
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 500px;
    background-position: center;
  h1{
    font-size:100px;
    text-align: center;
    font-family: 'Arvo', serif;
  }
 }
 .link{
    color: #fff!important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
    text-decoration: none;
  }
  .link:hover{
    background: #9c9c9c;
  }

.box{
  margin-top:-80px;
  h3{
    font-family: 'Arvo', serif;
  }
}
</style>
