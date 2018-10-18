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

    .block-one {
        background-color: #000;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHdpZHRoPScwLjE5OWluJyBoZWlnaHQ9JzAuMTE0aW4nIHZlcnNpb249JzEuMScgc3R5bGU9J3NoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkJyB2aWV3Qm94PScwIDAgMTk5IDExNCcgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPjxnPjxwYXRoIGZpbGw9JyMxYTFhMWEnIGQ9J00xMDAgNjFsLTkyIDUzIDE4MyAwIC05MSAtNTMgMCAwem05OSAtNTdsLTggNCAtODUgNTAgMCAwIDAgMCA4NSA0OSA4IDQgMCAtMTA3em0tMTkzIC00bDk0IDU0IDAgMCA5MSAtNTMgMiAtMSAtMTg3IDB6bS02IDExMWwwIDAgOTMgLTUzIC05MyAtNTQgMCAwIDAgMTA3em02IC0xMTFsMCAwIDAgMHonIC8+PC9nPjwvc3ZnPg==');
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
