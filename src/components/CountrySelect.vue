<template>
    <select
        @change="onChange()"
        v-model="selected" class="form-select mt-10 block w-full border p-3 rounded"
    >
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID">
            {{ country.Country }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        // emit an event to change stats data in home when an option is selected
        // so fro Global to the selected country
        onChange() { 
            const country = this.countries.find((country) => country.ID === this.selected)
            this.$emit('get-country', country)
        }
    }
}
</script>