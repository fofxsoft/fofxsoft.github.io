<template>
    <section id="main">
        <div class="featured">
            <div class="logo"></div>
            <p>
                Welcome to f(X) Software. We specilize in free and open-source
                components to help make our lives as developers easier.
            </p>
            <md-button class="md-raised md-accent featured-button" to="projects/">
                Projects
            </md-button>
        </div>
    </section>
</template>

<script>
export default {
    name: "home",
};
</script>

<style scoped>
#main {
    width: 100%;
    height: 100%;
    min-height: 100%;
}

#main p {
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
}

#main .featured {
    width: 100%;
    max-height: 100%;
    padding: 5% 0;
    background-color: #000;
    background-image: url('../assets/cross.svg');
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(228, 228, 228);
}

#main .featured .logo {
    width: 100%;
    height: 17em;
    display: block;
    background: url('../assets/logo-dark.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

#main .featured p {
    width: 55%;
    padding: 40px 0 0 0;
    font-size: 32px;
    line-height: 42px;
    font-weight: 300;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}

#main .featured .featured-button {
    height: 52px;
    font-weight: 600;
    padding: 0 50px;
}
</style>
