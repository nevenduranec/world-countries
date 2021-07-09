<template>
    <header>
        <div class="Container">
            <h1>World countries</h1>
            <button class="ChangeMode" type="button" @click="changeMode">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="moon"
                    class="svg-inline--fa fa-moon fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="var(--text)"
                        d="M256.135,512 C114.711,512 0.135,397.36 0.135,256 C0.135,114.575 114.775,0 256.135,0 C271.810934,0 287.453999,1.43414696 302.87,4.277 C346.891,12.408 356.637,71.146 317.892,93.196 C276.518,116.74 250.458,160.608 250.458,209.032 C250.458,292.556 326.382,355.507 408.73,339.824 C452.421,331.503 483.249,382.394 454.979,417.225 C407.117,476.196 334.891,512 256.135,512 Z"
                    ></path>
                    <path
                        fill="var(--white)"
                        d="M256.135,48 C141.26,48 48.135,141.125 48.135,256 C48.135,370.875 141.26,464 256.135,464 C321.366,464 379.574,433.964 417.71,386.976 C306.099,408.232 202.458,322.88 202.458,209.032 C202.458,141.52 239.391,82.641 294.151,51.478 C281.824,49.201 269.12,48 256.135,48 Z"
                    ></path>
                </svg>
                <span
                    >{{
                        $colorMode.value === 'dark' ? 'Light' : 'Dark'
                    }}
                    Mode</span
                >
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        changeMode() {
            this.$colorMode.preference =
                this.$colorMode.value === 'dark' ? 'light' : 'dark'
        },
    },
}
</script>
