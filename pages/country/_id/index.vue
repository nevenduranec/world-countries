<template>
    <div class="Single">
        <theheader />
        <div class="Container">
            <nuxt-link to="/" class="Back">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-left"
                    class="svg-inline--fa fa-arrow-left fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                    ></path>
                </svg>
                Back to all countries
            </nuxt-link>

            <div class="Single-body">
                <img class="Single-image" :src="country.flag" />
                <div class="Single-content">
                    <h1>{{ country.name }}</h1>
                    <ul class="Countries-details">
                        <li>
                            <strong>Native name:</strong>
                            {{ country.nativeName }}
                        </li>
                        <li>
                            <strong>Population:</strong>
                            {{ country.population }}
                        </li>
                        <li><strong>Region:</strong> {{ country.region }}</li>
                        <li>
                            <strong>Sub Region:</strong> {{ country.subregion }}
                        </li>
                        <li><strong>Capital:</strong> {{ country.capital }}</li>
                    </ul>
                    <ul class="Countries-details">
                        <li>
                            <strong>Top Level Domain:</strong>
                            <span
                                v-for="domain in country.topLevelDomain"
                                :key="domain"
                            >
                                {{ domain }}
                            </span>
                        </li>
                        <li>
                            <strong>Currencies:</strong>
                            <span
                                v-for="currency in country.currencies"
                                :key="currency.name"
                            >
                                {{ currency.name }}
                            </span>
                        </li>
                        <li>
                            <strong>Languages:</strong>
                            <span
                                v-for="language in country.languages"
                                :key="language.name"
                            >
                                {{ language.name }}
                            </span>
                        </li>
                    </ul>
                    <div>
                        <p>Border countries:</p>
                        <ul class="Single-borders">
                            <li v-for="border in country.borders" :key="border">
                                <nuxt-link :to="`/country/${border}`">
                                    {{ getCountryBorder(border) }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            getCountry: 'getCountry',
        }),
        country() {
            return this.getCountry(this.$route.params.id)
        },
    },
    methods: {
        getCountryBorder(code) {
            return this.getCountry(code).name
        },
    },
}
</script>
