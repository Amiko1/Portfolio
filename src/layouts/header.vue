<template>
    <div class="header-box">

        <div class="name">
            <router-link class="name" to="/main"> Burjanadze </router-link>  
        </div>

        <div class="social">
            <a class="soc" href="#"> <i class="fab fa-github"></i> </a>
            <a class="soc" href ="#"> <i class="fab fa-linkedin"> </i> </a>
            <a class="soc" href="#"> <i class="fab fa-facebook"></i> </a>
            <a class="soc1" href ="#"> <i class="fas fa-bars"></i> </a> 
        </div>   
    </div>
</template>


<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
.name {
    font-family: 'Amatic SC', cursive;
    font-weight: 400;
    font-size: 3rem;
    text-decoration: none;
    color:#FFFFFA;
}
a {
    color:white;
    text-decoration:none;
    font-size: 40px;
}

.header-box{
        width:100vw;
        display:flex;
        position:fixed;
        justify-content: space-between;
        margin-top: 30px;
        margin-left: 20px;
        
    }

.social {
    display:flex;
     justify-content: space-between;
    
    margin-top: 20px;
       
}

.soc {
    margin-right: 100px;
}
.soc1 {
    margin-right: 50px;
}
</style>