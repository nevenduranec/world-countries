<template>
    <form @submit.prevent="onSearch">
        <p class="Form-field">
            <input
                id="name"
                v-model="name"
                placeholder="Search for a country ..."
            />
            <label for="name"
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="svg-inline--fa fa-search fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                </svg>
            </label>
        </p>
        <p class="Form-field has-select">
            <select
                id="region"
                v-model="region"
                aria-label="Filter by region"
                name="region"
            >
                <option disabled value="">Filter by region</option>
                <option value="">All</option>
                <option v-for="regionValue in regions" :key="regionValue">
                    {{ regionValue }}
                </option>
            </select>
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                class="svg-inline--fa fa-angle-down fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                ></path>
            </svg>
        </p>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Search',
    computed: {
        ...mapState({
            regions: (state) => state.regions,
        }),
        name: {
            get() {
                return this.$store.state.filters[0].name
            },
            set(value) {
                this.setFilters({ type: 'name', name: value })
            },
        },
        region: {
            get() {
                return this.$store.state.filters[1].name
            },
            set(value) {
                this.setFilters({ type: 'region', name: value })
            },
        },
    },
    methods: {
        ...mapMutations(['setFilters']),
    },
}
</script>
