<template>
  <div id="wrapper">
    <Sidebar/>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
        <Navbar/>
      <div class="container-fluid">
        <Nuxt />
      </div>
      </div>
    </div>
  </div>
</template>
<style>
  body{
    color: #000;
  }
  .form-control{
    color: #000;
    font-size: 14px;
  }
  label{
    font-size: 12px  !important;
    color: #000;
  }
  .card{
    border: none;
  }
</style>

<script>
  import Navbar from './partials/nav';
  import Sidebar from './partials/sidebar';
    export default {
        components:{
            Navbar,
            Sidebar
        },

    }
</script>