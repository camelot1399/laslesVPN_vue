<template>
    <div>
        <header class="main">

        <router-link to="/" class="logo">
            <img class="logo__img" src="@/assets/img/Vector.png" alt="logo">
            Lasles<b>VPN</b>
        </router-link>

        <nav>
            <ul class="nav__ul">
            <li class="nav__li"><router-link to="/about" class="nav__a">About</router-link></li>
            <li class="nav__li"><router-link to="/Features" class="nav__a">Features</router-link></li>
            <li class="nav__li"><router-link to="/Pricing" class="nav__a">Pricing</router-link></li>
            <li class="nav__li"><router-link to="/Testimonials" class="nav__a">Testimonials</router-link></li>
            <li class="nav__li"><router-link to="/Help" class="nav__a">Help</router-link></li>
            </ul>
        </nav>
        
        <section class="autorization">
            <router-link to="#" class="autorization__signIn">Sign In</router-link>
            <button class="btn autorization__signUp">
            <router-link to="#" class="">Get Started</router-link>
            </button>
        </section>

        </header>
    </div>
</template>
<script>
export default {
    name: 'header'
}
</script>