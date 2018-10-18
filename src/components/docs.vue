<template>
    <section id="main">
        <md-card>
            <md-card-area>
                <md-card-media class="block-one">
                    <img src="https://fofxsoft.github.io/assets/logo.svg" />
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Block One</div>
                    <div class="md-subhead">Angular Documentation</div>
                </md-card-header>

                <md-card-content>
                    This documentaion demonstrates how to create an Angular app. Then shows you how to use a 3rd party
                    resource to display and edit data.
                </md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button href="https://fofxsoft.github.io/blockone/docs/getting-started" target="_blank">Visit</md-button>
            </md-card-actions>
        </md-card>
    </section>
</template>

<script>
export default {
    name: "docs",
};
</script>

<style scoped>
#main {
    padding: 20px 7px;
}

.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}

.md-card-media {
    height: 180px;
}

.block-one {
    background-color: #000;
    background-image: url('../assets/cross.svg');
    background-repeat: repeat;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.block-one img {
    height: 45px !important;
}
</style>
