<template>
    <section class="nav">
        <div class="nav-logo">
            <img src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png" alt="logo" class="logo-left">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li class="nav-list-item">About Me</li>
                <li class="nav-list-item">Git Hub</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.nav   
    position: fixed
    left: 0
    top: 0
    bottom: 0
    background: #333
    display: flex
    flex-direction: column
    align-items: center
    width: 20vw
    .nav-logo
        margin: 100px auto
        .nav-menu
            color: white

.nav-menu-list
    list-style: none
    padding: 0
    color: white
    .nav-list-item  
        background: #222
        padding: 10px 20px 
        text-align: center
        margin: 10px auto
        cursor: pointer
        &:hover
            width: 100%

.logo-left  
    width: 10%
    transform: translate(-50%,-50%)
    left: 50%
    top: 50%
    position: absolute
</style>