<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav />
    <Tweet />
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '@/components/SideNav'
import Tweet from '@/components/Tweet'

export default {
  name: 'Home',
  components: {
   SideNav,
   Tweet
  },
}
</script>
