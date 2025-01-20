<template>
    <div class="login">

        <div class="login_con1">
            <Login_container />
        </div>

        
        <div class="login_con2">
            <Islem_rehberi />
        </div>
        


    </div>


</template>


<script>
    import Login_container from '../components/Login_container.vue';
    import Islem_rehberi from '../components/Islem_rehberi.vue';
</script>

<style>

    .login {
        display: flex;
    }

    .login_con1 {
        flex: 3;
        max-width: 75%;
    }

    .login_con2 {
        padding: 15px 10px;
        width: 300px;
    }



</style>