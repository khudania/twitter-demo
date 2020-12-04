<template>
    <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">What’s happening</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in trending" :key="trend" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
          <div>
            <p class="text-xs text-left leading-tight text-dark"> {{ trend.top}} </p>
            <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title}} </p>
            <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom}} </p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
</template>

<script>

export default {
  name: 'Trend',
  components: {
  },
  data() {
    return {
      
      trending: [
        {top: 'COVID-19 LIVE', title: 'COVID-19 in India', bottom: ''},
        {top: 'Agriculture · Trending', title: '#कल_किसानों_का_भारतबंद_रहेगा', bottom: '11.8K Tweets'},
        {top: 'Trending in India', title: '#DiljitVsKangana', bottom: 'Trending with #DiljitDosanjh'},
        {top: 'Music · Trending', title: '#कंगना_रानौत_शेरनी_है', bottom: '36.8k Tweets'},
        {top: 'Trending in India', title: '#कल_भारत_बंद_रहेगा', bottom: 'Trending with #5दिसंबर_भारत_बंद, #कल_किसानों_का_भारतबंद_रहेगा'},
        {top: 'United States politics · Trending', title: '#भारतीय_नौसेना_दिवस', bottom: '1028 Tweets'},
      
      ]
    }
  },
}
</script>