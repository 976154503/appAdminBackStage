<template>
    <div>
        <el-row class="el-header bg-primary">
            <el-col :span="24">
                <img src="" title="">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="2">切换主题色</el-menu-item>
                    <el-menu-item index="3">下载主题</el-menu-item>
                    <el-menu-item index="4">帮助</el-menu-item>
                    <el-menu-item index="5">中文</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .bg-primary {
        color: #fff;
    }
</style>

