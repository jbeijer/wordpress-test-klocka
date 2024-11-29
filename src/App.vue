<template>
  <div class="world-time">
    <h2>World Time Display</h2>
    <div class="time-grid">
      <div v-for="city in cities" :key="city.name" class="time-card">
        <h3>{{ city.name }}</h3>
        <div class="time">{{ getTime(city.timezone) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { format } from 'date-fns'
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'

const cities = ref([
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { name: 'Moscow', timezone: 'Europe/Moscow' }
])

const getTime = (timezone) => {
  const date = new Date()
  const zonedDate = utcToZonedTime(date, timezone)
  return format(zonedDate, 'HH:mm:ss')
}

let timer
onMounted(() => {
  timer = setInterval(() => {
    cities.value = [...cities.value]
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.world-time {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.time-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.time-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.time {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
}
</style>
