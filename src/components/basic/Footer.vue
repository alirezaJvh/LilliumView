<template>
    <v-footer
        id="footer"
        absolute
        height="82">

        <div class="footer-items">
            sf
            <span
                v-for="link in links" 
                :key="link.name">
                <a class="tertiary--text footer-links">{{link.name}}</a>
            </span>
        </div>
    </v-footer>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            links: [
                {name: 'خانه', link: ''},
                {name: 'خانه', link: ''},
                {name: 'خانه', link: ''}
            ]
        }
    }
}
</script>


<style>
#footer {
    z-index: 0;
}
</style>
