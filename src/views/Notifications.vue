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
import Tweet from '@/components/Notification'
import Trending from '@/components/Trending'


export default {
  name: 'Notification',
  components: {
   SideNav,
   Tweet,
   Trending,
  },
  metaInfo: {
    title: 'Notifications | Twitter',
    titleTemplate: '%s',
    meta: [
     
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'This is My Demo Site - Its a clone of twitter'},


      {property: 'og:title', content: 'Home | Twitter'},
      {property: 'og:site_name', content: 'This is My Demo Site - Its a clone of twitter'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://himanshu-khudania.github.io'},
      {property: 'og:image', content: 'https://himanshu-khudania.github.io/static/img/1.52554b7.jpg'},
      {property: 'og:description', content: 'This is My Demo Site - Its a clone of twitter'},

      // Twitter card
      {name: 'twitter:card', content: 'Test Data'},
      {name: 'twitter:site', content: 'https://twitter.com/hkhudania'},
      {name: 'twitter:title', content: 'Home | Twitter'},
      {name: 'twitter:description', content: 'This is My Demo Site - Its a clone of twitter'},
      {name: 'twitter:creator', content: '@hkhudania'},
      {name: 'twitter:image:src', content: 'https://twitter.com/hkhudania/photo'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Home | Twitter'},
      {itemprop: 'description', content: 'This is My Demo Site - Its a clone of twitter'},
      {itemprop: 'image', content: 'https://twitter.com/hkhudania/photo'}

    ]
  }
}
</script>
