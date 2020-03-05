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
        background: #333
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        .nav-logo   
            margin: 20px auto
            .nav-menu   
                width: 100%
    .logo-left  
        width: 10%
        transform: translate(-50%,-50%)
        left: 50%
        top: 50%
        position: absolute

    .nav-menu-list  
        list-style: none
        padding: 0
        display: flex
        margin: 0
        color: white
        li  
            width: 50%
            text-align: center
            background: #555
            padding: 10px 0 
            cursor: pointer
            transition: background 300ms ease-in-out
            &:hover
                background: #333
            &:first-of-type
                border-bottom: 5px solid #222
</style>