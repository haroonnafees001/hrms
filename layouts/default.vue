<template>
  <div id="wrapper">
    <Sidebar v-if="!menuHide" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
        <Navbar v-if="!menuHide"  />
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
        data() {
            return {
                menuHide: false
            }
        },

        watch: {
            $route(to, from) {

               if(to.name !=='login' || to.name !=='register' || to.name !=='forgot-password'){
                   this.menuHide = false;
               }
            },
        },
        mounted() {
            console.log(this.$route.name)
            this.$nuxt.$on('menuHide', data => {
            this.menuHide=data;
        })
        },
    }
</script>