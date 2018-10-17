<template>
    <section id="main">
        <md-card>
            <md-card-area>
                <md-card-media class="code">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td class="img">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjc4LjkgNTExLjVsLTYxLTE3LjdjLTYuNC0xLjgtMTAtOC41LTguMi0xNC45TDM0Ni4yIDguN2MxLjgtNi40IDguNS0xMCAxNC45LTguMmw2MSAxNy43YzYuNCAxLjggMTAgOC41IDguMiAxNC45TDI5My44IDUwMy4zYy0xLjkgNi40LTguNSAxMC4xLTE0LjkgOC4yem0tMTE0LTExMi4ybDQzLjUtNDYuNGM0LjYtNC45IDQuMy0xMi43LS44LTE3LjJMMTE3IDI1Nmw5MC42LTc5LjdjNS4xLTQuNSA1LjUtMTIuMy44LTE3LjJsLTQzLjUtNDYuNGMtNC41LTQuOC0xMi4xLTUuMS0xNy0uNUwzLjggMjQ3LjJjLTUuMSA0LjctNS4xIDEyLjggMCAxNy41bDE0NC4xIDEzNS4xYzQuOSA0LjYgMTIuNSA0LjQgMTctLjV6bTMyNy4yLjZsMTQ0LjEtMTM1LjFjNS4xLTQuNyA1LjEtMTIuOCAwLTE3LjVMNDkyLjEgMTEyLjFjLTQuOC00LjUtMTIuNC00LjMtMTcgLjVMNDMxLjYgMTU5Yy00LjYgNC45LTQuMyAxMi43LjggMTcuMkw1MjMgMjU2bC05MC42IDc5LjdjLTUuMSA0LjUtNS41IDEyLjMtLjggMTcuMmw0My41IDQ2LjRjNC41IDQuOSAxMi4xIDUuMSAxNyAuNnoiLz48L3N2Zz4=">
                            </td>
                            <td class="title">
                                Code Editor
                            </td>
                        </tr>
                    </table>
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Code Editor</div>
                    <div class="md-subhead">An Online Code Editor</div>
                </md-card-header>

                <md-card-content>
                    This editor uses the Monaco Editor, which is the same editor that powers Visual Studio Code. This project
                    compiles ESLint support directly into the editor.
                </md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button href="https://github.com/fofxsoft/code" target="_blank">Repository</md-button>
                <md-button href="https://fofxsoft.github.io/code/" target="_blank">Demo</md-button>
            </md-card-actions>
        </md-card>

        <md-card>
            <md-card-area>
                <md-card-media class="docs">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td class="img">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjc4LjkgNTExLjVsLTYxLTE3LjdjLTYuNC0xLjgtMTAtOC41LTguMi0xNC45TDM0Ni4yIDguN2MxLjgtNi40IDguNS0xMCAxNC45LTguMmw2MSAxNy43YzYuNCAxLjggMTAgOC41IDguMiAxNC45TDI5My44IDUwMy4zYy0xLjkgNi40LTguNSAxMC4xLTE0LjkgOC4yem0tMTE0LTExMi4ybDQzLjUtNDYuNGM0LjYtNC45IDQuMy0xMi43LS44LTE3LjJMMTE3IDI1Nmw5MC42LTc5LjdjNS4xLTQuNSA1LjUtMTIuMy44LTE3LjJsLTQzLjUtNDYuNGMtNC41LTQuOC0xMi4xLTUuMS0xNy0uNUwzLjggMjQ3LjJjLTUuMSA0LjctNS4xIDEyLjggMCAxNy41bDE0NC4xIDEzNS4xYzQuOSA0LjYgMTIuNSA0LjQgMTctLjV6bTMyNy4yLjZsMTQ0LjEtMTM1LjFjNS4xLTQuNyA1LjEtMTIuOCAwLTE3LjVMNDkyLjEgMTEyLjFjLTQuOC00LjUtMTIuNC00LjMtMTcgLjVMNDMxLjYgMTU5Yy00LjYgNC45LTQuMyAxMi43LjggMTcuMkw1MjMgMjU2bC05MC42IDc5LjdjLTUuMSA0LjUtNS41IDEyLjMtLjggMTcuMmw0My41IDQ2LjRjNC41IDQuOSAxMi4xIDUuMSAxNyAuNnoiLz48L3N2Zz4=">
                            </td>
                            <td class="title">
                                Code Docs
                            </td>
                        </tr>
                    </table>
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Code Docs</div>
                    <div class="md-subhead">A Dynamic Markdown Renderer</div>
                </md-card-header>

                <md-card-content>
                    This project uses Showdown, a markdown to HTML converter. It then packs in PrismJS, which adds syntax
                    highlighting for your markdown code blocks.
                </md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button href="https://github.com/fofxsoft/docs" target="_blank">Repository</md-button>
                <md-button href="https://fofxsoft.github.io/docs/" target="_blank">Demo</md-button>
            </md-card-actions>
        </md-card>

        <md-card>
            <md-card-area>
                <md-card-media class="encompass">
                    <img src="https://fofxsoft.github.io/encompass/static/images/header-logo.svg">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Encompass</div>
                    <div class="md-subhead">Design Idea</div>
                </md-card-header>

                <md-card-content>
                    This is a new workflow design idea for Encompass. It leverges an app menu, with a tabbed workspace. It impliments a modern design that uses a flex box layout.
                </md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button href="https://fofxsoft.github.io/encompass/" target="_blank">Visit</md-button>
            </md-card-actions>
        </md-card>
    </section>
</template>

<script>
    export default {
        name: "projects",
    }
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

    .code {
        background-color: #68217a;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .code table {
        margin-bottom: 15px;
    }

    .code .img {
        width: 60px;
        padding-right: 10px;
    }

    .code .img img {
        height: 50px;
        display: inline-block;
    }

    .code .title {
        white-space: nowrap;
        font-size: 28pt;
        color: #fff;
        vertical-align: middle;
        font-weight: 450;
    }

    .docs {
        background-color: #007acc;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .docs table {
        margin-bottom: 15px;
    }

    .docs .img {
        width: 60px;
        padding-right: 10px;
    }

    .docs .img img {
        height: 50px;
        display: inline-block;
    }

    .docs .title {
        white-space: nowrap;
        font-size: 28pt;
        color: #fff;
        vertical-align: middle;
        font-weight: 450;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .encompass {
        background-color: #104fa8;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .encompass img {
        height: 35px !important;
    }
</style>
