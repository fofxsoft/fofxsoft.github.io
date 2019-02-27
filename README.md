# f(X) Software
Welcome the the services development home.

### Boilerplate

HTML boilderplate
```html
<!--
    Include the services common styles.
-->
<link rel="stylesheet" type="text/css" href="https://fofxsoft.com/css/svs-app.css">

<div id="svs-app-main">

    <!--
        You HTML code goes here. The default app style is
        a flex box orientated by column.
    -->

</div>

<!--
    Include the services common scripts
-->
<script async defer src="https://fofxsoft.com/js/svs-app.js" onload="this.onload = function(){}; init()" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>
```

JavaScript bolierplate
```javascript
/*
 * Debug mode is used to log app activity. By default only
 * critical errors are logged.
 */
const DEBUG = true;

class Main {
    constructor(selector) {
        this.app = $(dashboardItem).find(selector);
        this.args = Services.getArgs();

        Services.layoutDashboard(this.app);

        /*
         * Use this.args to store and load variables from the URL.
         *
         * For Example;
         * this.args.action = "Foo";
         * Services.setArgs(this.args);
         *
         * Then pass this.args around into your functions and execute the code based on the args.
         * This will allow you to keep the browser's history and refresh working.
         */
    }

    /*
     * You application code goes here. Use ES6 class style.
     *
     * For example;
     *
     * myFunction(arg) {
     *     [code];
     * }
     *
     * myVariable = "foo"
     *
     * Note: In ES6 classes you ommit the semicolan for methods and properties. You sill
     * use semicolans in the functions.
     */
}

const init = function init() {
    Services.initApp(() => {
        const app = new Main("#svs-app-main");

        /*
         * Application entry code. Use this area to call your default view
         * or any other initial code that is not called in the Main constructor.
         */
    });
};


```
