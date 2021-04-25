<template>
    <footer>

        <subscribe></subscribe>

        <div class="footer main">
            <div class="footer__left">

                <a class="logo" href="/">
                <img class="logo__img" src="@/assets/img/Vector.png" alt="logo">
                Lasles<b>VPN</b>
                </a>

                <p class="footer__left_p">LaslesVPN is a private virtual network that has unique features and has high security.</p>

                <div class="footer__left_subscribes">
                    <div class="footer__left_subscribe"><i class="fab fa-facebook"></i></div>
                    <div class="footer__left_subscribe"><i class="fab fa-twitter"></i></div>
                    <div class="footer__left_subscribe"><i class="fab fa-instagram-square"></i></div>
                </div>

                <div class="footer__left_signature">
                    ©2021LaslesVPN
                </div>
            </div>

            <div class="footer__right">

                <div class="footer__right_group">

                <div>
                    <label for="footer__h3">
                    <h3 class="footer__h3 nowrap">Product</h3>
                    </label>
                    <ul class="footer__ul">
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Download</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Pricing</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Locations</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Server</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Countries</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Blog</a>
                    </li>
                    </ul>
                </div>

                <div>
                    <label for="footer__h3">
                    <h3 class="footer__h3 nowrap">Engage</h3>
                    </label>
                    <ul class="footer__ul">
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">LaslesVPN ? </a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">FAQ</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Tutorials</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">About Us</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Privacy Policy</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Terms of Service</a>
                    </li>
                    </ul>
                </div>
                </div>

                <div>
                <div>
                    <label for="footer__h3">
                    <h3 class="footer__h3 nowrap">Earn Money</h3>
                    </label>
                    <ul class="footer__ul">
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Affiliate</a>
                    </li>
                    <li class="footer__li">
                        <a href="#" class="footer__li_a">Become Partner</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

    </footer>
</template>
<script>
import subscribe from '@/components/subscribe.vue';
export default {
    name: 'footer',
    components: {
        subscribe
    }
}
</script>