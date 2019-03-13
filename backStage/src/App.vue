<template>
    <div id="App">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {}
};
</script>

<style>
body {
    background-color: #f6f6f6;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.el-logo-head {
    background-color: #000;
}

.el-logo-head p {
    width: 1180px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
}

.login-form {
    width: 280px;
    padding: 15px 30px;
    margin: 150px auto 0;
    background-color: #fff;
}

.login-title {
    font-size: 14px;
    color: #666;
    text-align: left;
}

.form-input {
    margin: 5px auto;
}

.fluid {
    width: 100%;
}

.mt15 {
    margin-top: 15px;
}

.mb15 {
    margin-bottom: 15px;
}
</style>
