<template>
    <div id="main">
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
    </div>
</template>

<script>
    export default {
        name: "home",
    }
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
        padding: 100px 0 120px 0;
        background-color: #000;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHdpZHRoPScwLjE5OWluJyBoZWlnaHQ9JzAuMTE0aW4nIHZlcnNpb249JzEuMScgc3R5bGU9J3NoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkJyB2aWV3Qm94PScwIDAgMTk5IDExNCcgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPjxnPjxwYXRoIGZpbGw9JyMxYTFhMWEnIGQ9J00xMDAgNjFsLTkyIDUzIDE4MyAwIC05MSAtNTMgMCAwem05OSAtNTdsLTggNCAtODUgNTAgMCAwIDAgMCA4NSA0OSA4IDQgMCAtMTA3em0tMTkzIC00bDk0IDU0IDAgMCA5MSAtNTMgMiAtMSAtMTg3IDB6bS02IDExMWwwIDAgOTMgLTUzIC05MyAtNTQgMCAwIDAgMTA3em02IC0xMTFsMCAwIDAgMHonIC8+PC9nPjwvc3ZnPg==');
        background-repeat: repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: rgb(228, 228, 228);
    }

    #main .featured .logo {
        width: 316px;
        height: 180px;
        display: block;
        background: url('../assets/logo-dark.svg');
        background-size: 316px 180px;
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
