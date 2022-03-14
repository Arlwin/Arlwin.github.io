<template>
    <v-container fluid class="pr-10">
        <v-row class="d-flex">
            <v-card
                height="80px"
                width="80px"
                color="background"
                flat
            >
                <v-img
                    :src="require('../assets/logo.svg')"
                >
                </v-img>
            </v-card>
            <v-spacer></v-spacer>
            <v-list
                class="py-5 background" 
                two-line
            >
                <v-list-item-group>
                    <v-list-item 
                        v-for="item in nav_items" 
                        :key="item"
                    >
                    <span class="nav white--text">{{ item }}</span>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-row>
        <v-row>
            <v-card 
                height="70vh"
                width="75vw"
                class="mx-auto my-auto d-flex align-stretch"
                color="background"
                flat 
            >
                <v-col class="d-flex flex-column justify-center">
                    <v-spacer></v-spacer>
                    <v-row class="header d-flex flex-column justify-center">
                        <span class="align-self-start">
                            ARLWIN
                        </span>
                        <span class="align-self-end"> 
                            FAJARDO
                        </span>
                    </v-row>
                    <v-row class="d-flex justify-center align-center">
                        <v-icon
                            class="mx-4"
                            v-for="icon in icons" 
                            :key="icon.icon"
                            color="white"
                            @click="goto(icon.target)"
                        >{{ icon.icon }}</v-icon>
                    </v-row>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                    <v-img
                        src="https://lun-us.icons8.com/a/F0iYpksziUmDF9wzhr0Q2w/wTV8sn_zQkSaCTunj9MxLg/Illu__Placeholder_.png"
                        height="70vh"
                        width="42vw"
                    ></v-img>
                </v-col>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'HomeView',

    data: () => ({
        nav_items: [
            "HOME",
            "ABOUT"
        ],
        icons: [
            {icon: "mdi-gmail",
            target: "mailto:arlwin.fajardo@gmail.com"},
            { icon: "mdi-github",
            target: "https://github.com/Arlwin"},
            { icon: "mdi-linkedin",
            target: "https://www.linkedin.com/in/arlwinfajardo/"}
        ]
    }),

    methods: {
        goto(url) {
            window.location.href = url;
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&family=Lexend+Giga&display=swap');

.nav {
  font-family: 'Lexend Deca', sans-serif !important;
  font-size: 36px;
}

.header {
  font-family: 'Lexend Giga', sans-serif !important;
  font-size: 64px;
  color: white;
}


</style>