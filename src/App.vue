<template>
  <div id="app">
    <router-view/>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 footer-links">
            <a href="#">imprint</a>
            <a href="#">privacy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  color: #2c3e50;
}
  body {
    margin: 0;
  }

</style>
