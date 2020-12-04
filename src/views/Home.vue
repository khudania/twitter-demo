<template>
  <div id="home" class="flex container h-screen w-full">
    <SideNav />
    <Tweet />
    <Trending />
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '@/components/SideNav'
import Tweet from '@/components/Tweet'
import Trending from '@/components/Trending'

export default {
  name: 'Home',
  components: {
   SideNav,
   Tweet,
   Trending
  },
}
</script>
