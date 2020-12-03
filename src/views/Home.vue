<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav />
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '@/components/SideNav'

export default {
  name: 'Home',
  components: {
   SideNav
  },
}
</script>
