<template>
    <div class="signup">

        <div class="signup_con1">
            <Signup_container />
        </div>

        
        <div class="signup_con2">
            <Islem_rehberi />
        </div>
        


    </div>


</template>


<script>
    import Signup_container from '../components/Signup_container.vue';
    import Islem_rehberi from '../components/Islem_rehberi.vue';
</script>

<style>

    .signup {
        display: flex;
    }

    .signup_con1 {
        flex: 3;
        width: 600px;
    }

    .signup_con2 {
        padding: 15px 10px;
        width: 300px;
    }



</style>