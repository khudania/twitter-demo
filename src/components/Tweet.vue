<template>
    <!-- tweets -->
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img src="profile.jpg" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <form v-on:submit.prevent = "addNewTweet" class="w-full px-4 relative">
          <textarea v-model="tweet.content" placeholder="What's happening?" class="mt-3 pb-3 w-full focus:outline-none"/>
          <div class="flex items-center">
            <i class="text-lg text-blue mr-4 far fa-image"></i>
            <i class="text-lg text-blue mr-4 fas fa-film"></i>
            <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue mr-4 far fa-smile"></i>
            <i class="text-lg text-blue mr-4 fas fa-business-time"></i>
          </div>
          <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
            Tweet
          </button>
        </form>
      </div>
      <div class="flex flex-col-reverse">
        <div v-for="tweet in tweets" :key="tweet" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img src="profile.jpg" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Himanshu Khudania </p>
              <p class="text-sm text-dark ml-2"> @khudania </p>
              <p class="text-sm text-dark ml-2"> 1 sec </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="follow in following" :key="follow" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ follow.name }} </p>
            <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
            <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p> {{ follow.comments }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p> {{ follow.retweets }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-heart mr-3"></i>
              <p> {{ follow.like }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      
    
      following: [
        {src: 'hardeep.jpg', name: 'Hardeep Singh Puri', handle: '@HardeepSPuri', time: '8h', tweet: 'Vande Bharat Mission is the largest repatriation mission of its kind in recent times.', comments: '187', retweets: '550', like: '10k'},
        {src: 'amitabh.jpg', name: 'Amitabh Bachchan', handle: '@SrBachchan', time: '55m', tweet: 'Should me and the rock do another sub-par movie together????', comments: '287', retweets: '50', like: '2k'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@elonmusk', time: '3h', tweet: 'Watch Demolition Man', comments: '3.3k', retweets: '2.7k', like: '32.6k'},
        {src: 'amitabh.jpg', name: 'Amitabh Bachchan', handle: '@SrBachchan', time: 'Dec 2', tweet: 'T 3739 - ".... at any given moment, the human mind can take in 11 million pieces of information. The most generous estimate is that people can be consciously aware of forty of these .. " ~ UnvV', comments: '120', retweets: '280', like: '5k'},
        {src: 'amitabh.jpg', name: 'Amitabh Bachchan', handle: '@SrBachchan', time: 'Nov 29', tweet: "T 3737 - PREM NATH ji .. legendary iconic artist of the Film Industry .. a tribute to him by his Grandsons - Monty Nath's sons ! a family coming together in homage and remembrance ..  the values we cherish and live for  Folded handsFolded hands", comments: '156', retweets: '200', like: '2.5k'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@elonmusk', time: 'Nov 25', tweet: 'Good Starship SN8 static fire! Aiming for first 15km / ~50k ft altitude flight next week. Goals are to test 3 engine ascent, body flaps, transition from main to header tanks & landing flip.', comments: '1.6k', retweets: '4.1k', like: '55.3k'},
        {src: 'nasa.jpg', name: 'Nasa', handle: '@NASA', time: 'Nov 24', tweet: 'With Chang’e 5, China has launched an effort to join the U.S. & the former Soviet Union in obtaining lunar samples. We hope China shares its data with the global scientific community to enhance our understanding of the Moon like our Apollo missions did & the Artemis program will.', comments: '1.1k', retweets: '1k', like: '6k'}
      ],
      tweets: [
        {content: 'It is so nice outside!'}
      ],
      tweet: {content: ''}
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