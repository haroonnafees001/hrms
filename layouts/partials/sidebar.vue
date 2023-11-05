<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-bolt"></i>
            </div>
            <div class="sidebar-brand-text mx-3">HRM</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
                <i class="fas fa-fw fa-home"></i>
                <span>Dashboard</span>
            </NuxtLink>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <NuxtLink class="nav-link" to="/member-area">
                <i class="fas fa-fw fa-user"></i>
                <span>Member Area</span>
            </NuxtLink>
        </li>


    </ul>
    <!-- End of Sidebar -->
</template>

<script>
    export default {
        name: "sidebar.vue"
    }
</script>

<style scoped>

</style>