<template>
  <main v-if="!loading">
    <DataTile :text="title" :dataDate="dataDate" />
    
    <DataBoxes :stats="stats" />

    <CountrySelect @get-country="getCountryData" :countries="countries" />

    <button 
      class="bg-green-700 text-white rounded p-3  mt-10 
      focus:outline-none hover:bg-green-600"
      v-if="stats.Country"
      @click="clearCountryData"
    >
      Clear Country
    </button>
  </main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" />
  </main>
</template>

<script>
import DataTile from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components: {
    DataTile,
    DataBoxes,
    CountrySelect
  },
  data() { // use to bind data to the state of our view
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  methods: { // holds several functions 
    async fetchCovidData() {
      const response = await fetch('https://api.covid19api.com/summary')
      const data = await response.json();
      return data;
    },
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountryData() { //request
      this.loading = true;

      const data = await this.fetchCovidData();
      this.title = "Global";
      this.state - data.Global;
      this.loading =  false;

    }
  },
  async created() { //gets called on page load
    const data = await this.fetchCovidData();

    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  }
}
</script>
