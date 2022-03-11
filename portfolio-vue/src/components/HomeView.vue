<template>
    <v-container fluid class="px-10">
        <v-row class="d-flex justify-space-between align-center">
            <v-card
                class="d-flex align-center justify-center"
                height="150px"
                width="150px"
                color="background"
                flat
            >
                <v-avatar
                    color="accent"
                >
                    <span class="white--text text-h5">AF</span>
                </v-avatar>
            </v-card>
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
                            :key="icon"
                            color="white"
                        >{{ icon }}</v-icon>
                    </v-row>
                    <v-spacer></v-spacer>
                </v-col>
                <v-col>
                    <v-img
                        src="https://lun-us.icons8.com/a/F0iYpksziUmDF9wzhr0Q2w/wTV8sn_zQkSaCTunj9MxLg/Illu__Placeholder_.png"
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
            "mdi-gmail",
            "mdi-github",
            "mdi-linkedin"
        ]
    }),
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