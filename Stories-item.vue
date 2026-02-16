<template>
  <div class="stories-container">
    <div class="story-item" v-for="story in stories" :key="story.id">
      <h3>{{ story.title }}</h3>
      <p>{{ story.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [] // assume we fetch stories from an API
    };
  },
  mounted() {
    // fetching logic here
  }
};
</script>

<style scoped>
.stories-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.story-item {
  flex: 0 0 calc(33.333% - 1rem); /* Adjust from 75% for larger screens */
  margin-bottom: 1rem;
}

@media (max-width: 1200px) {
  .story-item {
    flex: 0 0 calc(50% - 1rem); /* Adjust for tablet and small laptops */
  }
}

@media (max-width: 1024px) {
  .story-item {
    flex: 0 0 calc(100% - 1rem); /* Full width for mobile */
    margin: 0.5rem 0; /* Better spacing */
  }
}

@media (max-width: 768px) {
  .story-item {
    display: none; /* Fully collapse on mobile */
  }
}
</style>