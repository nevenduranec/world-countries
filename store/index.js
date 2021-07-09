export const state = () => ({
    countries: null,
    regions: null,
    filters: [
        {
            type: 'name',
            name: '',
        },
        {
            type: 'region',
            name: '',
        },
    ],
    limit: 28,
})

export const mutations = {
    setCountries(state, data) {
        state.countries = data
    },
    setRegions(state, data) {
        state.regions = data
    },
    setFilters(state, value) {
        state.filters.forEach((filter) => {
            if (filter.type === value.type) {
                filter.name = value.name
            }
        })
    },
    setLimit(state, data) {
        state.limit = data
    },
}

export const getters = {
    getCountriesLength: (state) => {
        return state.countries.length
    },
    getCountry: (state) => (code) => {
        return state.countries.find((country) => country.alpha3Code === code)
    },
    getLimit: (state) => {
        return state.limit
    },
    getFilters: (state) => {
        return state.filters.some((filterEl) => {
            return filterEl.name !== ''
        })
    },
    getCountries: (state, getters) => {
        if (!getters.getFilters) {
            return state.countries.slice(0, state.limit)
        } else {
            return state.countries.filter((el) =>
                state.filters.every((filterEl) => {
                    return el[filterEl.type]
                        .toLowerCase()
                        .includes(filterEl.name.toLowerCase())
                })
            )
        }
    },
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const countries = await this.$axios.get(
            'https://restcountries.eu/rest/v2/all'
        )
        commit('setCountries', countries.data)

        const regions = new Set()

        for (const country in countries.data) {
            if (countries.data[country].region) {
                regions.add(countries.data[country].region)
            }
        }

        commit('setRegions', regions)
    },
}
