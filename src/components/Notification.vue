<template>
    <!-- tweets -->
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Notifications</h1>
        <i class="fas fa-cog text-xl text-blue"></i>
      </div>
      
      
      <div v-for="follow in following" :key="follow" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="w-full ml-5">
          <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
        
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ follow.name }} </p>
            <i class="fas fa-ellipsis-h text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      
    
      following: [
        {src: 'hardeep.jpg', name: 'Recommended For You', tweet: 'Vande Bharat Mission is the largest repatriation mission of its kind in recent times.'},
        {src: 'nasa.jpg', name: 'Nasa', tweet: 'With Chang’e 5, China has launched an effort to join the U.S. & the former Soviet Union in obtaining lunar samples.....'},
        {src: 'amitabh.jpg', name: 'Amitabh Bachchan', tweet: 'Should me and the rock do another sub-par movie together????'},
        {src: 'amitabh.jpg', name: 'Amitabh Bachchan', tweet: 'T 3739 - ".... at any given moment, the human mind can take in 11 million pieces of information. The....'},
        
        {src: 'elon.jpg', name: 'Elon Musk', tweet: 'Good Starship SN8 static fire! Aiming for first 15km / ~50k ft altitude flight next week. Goals are to......'},
        
      ],
      
    }
  },
  methods: {
    addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push (newTweet)
    }
  }
}
</script>