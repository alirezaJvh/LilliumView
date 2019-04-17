<template>
    <v-toolbar 
    id="toolbar" 
    flat
    prominent
    style="background: #eee;">

        <div class="v-toolbar-title">
            <v-toolbar-title 
               class="tertiary--text font-weight-light">
               <v-btn  
                v-if="responsive"
                class="default v-btn--simple"
                
                icon
                @click.stop="onClickBtn">
                   <v-icon color="tertiary">mdi-view-list</v-icon>
               </v-btn>
               <span>{{ title }}</span>
            </v-toolbar-title>
        </div>

        <v-spacer />
         <v-toolbar-items>
             <v-flex 
                align-center 
                layout 
                py-2 >

                <router-link
                    v-for="(item, index) in toolbarItems"
                    :key="index"
                    class="toolbar-items"
                    v-ripple
                    to="/">
                        <v-icon color="tertiary">{{item.icon}}</v-icon>
                </router-link>

               
                  
            </v-flex>

          
        
         </v-toolbar-items>
            

    </v-toolbar>

    
</template>


<script>

export default {
    name: 'toolbar',
    data() {
        return {
            title: 'استخر شیرودی',
            responsive: false,
            toolbarItems: [
                {
                    icon: 'mdi-view-dashboard',
                    routeName: ''
                },
                {
                    icon: 'mdi-bell',
                    routeName: ''
                },
                {
                    icon: 'mdi-account',
                    routeName: ''
                },
            ]

        }
    },
    mounted () {
        this.onResponsiveInverted()
        window.addEventListener('resize', this.onResponsiveInverted)
    },
    methods: {
        onClickBtn() {
            //  TODO :
        },
        onResponsiveInverted () {
            if (window.innerWidth < 991) {
                this.responsive = true
                this.responsiveInput = false
            } else {
                this.responsive = false
                this.responsiveInput = true
            }
      }
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onResponsiveInverted)
  },
}

</script>


<style scope>
#toolbar a {
    text-decoration: none;
}
</style>