<template>
    <div id="app">
        <md-app md-mode="fixed">
            <md-app-toolbar id="nav" class="md-accent">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <router-link to="/" class="logo" />
                        </div>

                    <div class="md-toolbar-section-end">
                        <md-button to="/projects">Projects</md-button>
                            <md-button to="/docs">Documentation</md-button>

                        <md-button class="md-icon-button">
                            <md-icon>more_vert</md-icon>
                        </md-button>
                    </div>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <router-view />
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: "app",
    }
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        width: 100%;
        height: 100%;
    }

    #app .md-app {
        height: 100%;
        overflow: hidden;
    }

    #app .md-app-container {
        height: 100%;
        overflow: hidden;
    }

    #app .md-app-content {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #app .md-app-scroller {
        height: 100%;
        overflow: auto;
    }

    #app .md-content {
        height: 100%;
        border: 0 none;
    }

    #nav {
        background-color: #4cbd38;
    }

    #nav .logo {
        width: 77px;
        height: 44px;
        background: url('./assets/logo-accent.svg');
        background-size: 77px 44px;
        background-repeat: no-repeat;
    }
</style>
