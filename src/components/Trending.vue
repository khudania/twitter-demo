<template>
    <!-- trending -->
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <Search />
    </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'


export default {
  name: 'Trending',
  components: {
   Search,
  
  },
}
</script>