<template>
    <section id="main">
        <md-card>
            <md-card-area>
                <md-card-media class="code-editor">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td class="img">
                                <img src="../assets/code.svg" />
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
                <md-button href="https://github.com/fofxsoft/code-editor" target="_blank">Repository</md-button>
                <md-button href="https://fofxsoft.github.io/code-editor/" target="_blank">Demo</md-button>
            </md-card-actions>
        </md-card>

        <md-card>
            <md-card-area>
                <md-card-media class="code-docs">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td class="img">
                                <img src="../assets/code.svg" />
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
                <md-button href="https://github.com/fofxsoft/code-docs" target="_blank">Repository</md-button>
                <md-button href="https://fofxsoft.github.io/code-docs/" target="_blank">Demo</md-button>
            </md-card-actions>
        </md-card>

        <md-card>
            <md-card-area>
                <md-card-media class="suma">
                    <img src="../assets/suma.svg" />
                </md-card-media>

                <md-card-header>
                    <div class="md-title">Suma</div>
                    <div class="md-subhead">Design Idea</div>
                </md-card-header>

                <md-card-content>
                    This is a new workflow design idea for Encompass. It leverges an app menu, with a tabbed workspace. It impliments a modern design that uses a flex box layout.
                </md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button href="https://github.com/fofxsoft/suma" target="_blank">Repository</md-button>
                <md-button href="https://fofxsoft.github.io/suma/" target="_blank">Demo</md-button>
            </md-card-actions>
        </md-card>
    </section>
</template>

<script>
export default {
    name: "projects",
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

.code-editor {
    background-color: #68217a;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.code-editor table {
    margin-bottom: 15px;
}

.code-editor .img {
    width: 60px;
    padding-right: 10px;
}

.code-editor .img img {
    height: 50px;
    display: inline-block;
}

.code-editor .title {
    white-space: nowrap;
    font-size: 28pt;
    color: #fff;
    vertical-align: middle;
    font-weight: 450;
}

.code-docs {
    background-color: #007acc;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.code-docs table {
    margin-bottom: 15px;
}

.code-docs .img {
    width: 60px;
    padding-right: 10px;
}

.code-docs .img img {
    height: 50px;
    display: inline-block;
}

.code-docs .title {
    white-space: nowrap;
    font-size: 28pt;
    color: #fff;
    vertical-align: middle;
    font-weight: 450;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.suma {
    background-color: #e25712;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.suma img {
    height: 75px !important;
}
</style>
