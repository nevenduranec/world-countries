<template>
    <div>
        <ul class="Countries">
            <li
                v-for="country in countries"
                :key="country.alpha3Code"
                class="Countries-item"
            >
                <span
                    class="Countries-flag"
                    :style="`background-image: url(${country.flag})`"
                ></span>
                <div class="Countries-body">
                    <h2 class="Countries-name">
                        <span>{{ country.name }}</span>
                    </h2>
                    <ul class="Countries-details">
                        <li>
                            <strong>Population:</strong>
                            {{ country.population }}
                        </li>
                        <li><strong>Region:</strong> {{ country.region }}</li>
                        <li><strong>Capital:</strong> {{ country.capital }}</li>
                    </ul>
                    <nuxt-link :to="`/country/${country.alpha3Code}`">
                        <span class="visually-hidden"
                            >Read more about {{ country.name }}</span
                        >
                    </nuxt-link>
                </div>
            </li>
        </ul>

        <button
            v-if="limit < countriesLength && !filters"
            type="button"
            class="ShowMore"
            @click="showMore"
        >
            Show more countries
            <span>showing {{ limit }} of {{ countriesLength }}</span>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'CountryListing',
    computed: {
        ...mapGetters({
            countries: 'getCountries',
            limit: 'getLimit',
            countriesLength: 'getCountriesLength',
            filters: 'getFilters',
        }),
    },
    methods: {
        ...mapMutations(['setLimit']),
        showMore() {
            this.setLimit(this.limit + 28)
            document.querySelector('.Countries-item:last-child a').focus()
        },
    },
}
</script>
