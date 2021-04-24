<template>
    <section class="chooseYourPlan">
        <h2 class="chooseYourPlan__h2">Choose Your Plan</h2>
        <p class="chooseYourPlan__p">Let's choose the package that is best for you and explore it happily and cheerfully.</p>

        <div class="main">
        <div class="chooseYourPlan__list">
            <div class="chooseYourPlan__item">

            <div>
                <img class="chooseYourPlan__item_img" src="@/assets/img/Free.png" alt="">
                <div class="chooseYourPlan__label">Free Plan</div>
        
                <ul class="chooseYourPlan__ul">
                <li class="chooseYourPlan__li">Unlimited Bandwitch</li>
                <li class="chooseYourPlan__li">Encrypted Connection</li>
                <li class="chooseYourPlan__li">No Traffic Logs</li>
                <li class="chooseYourPlan__li">Works on All Devices</li>
                </ul>
            </div>

            <div>
                <div class="chooseYourPlan__fee">Free</div>
                <button class="btn chooseYourPlan__btn">Select</button>
            </div>
            
            </div>
    
            <div class="chooseYourPlan__item">
            <div>
                <img class="chooseYourPlan__item_img" src="@/assets/img/Standard.png" alt="">
                <div class="chooseYourPlan__label">Standard Plan</div>
        
                <ul class="chooseYourPlan__ul">
                <li class="chooseYourPlan__li">Unlimited Bandwitch</li>
                <li class="chooseYourPlan__li">Encrypted Connection</li>
                <li class="chooseYourPlan__li">No Traffic Logs</li>
                <li class="chooseYourPlan__li">Works on All Devices</li>
                <li class="chooseYourPlan__li">Connect Anyware</li>
                </ul>
            </div>

            <div>
                <div class="chooseYourPlan__fee"><b>$9</b> / mo</div>
                <button class="btn chooseYourPlan__btn">Select</button>
            </div>
            </div>
    
            <div class="chooseYourPlan__item">
            <div>
                <img class="chooseYourPlan__item_img" src="@/assets/img/Premium.png" alt="">
                <div class="chooseYourPlan__label">Premium Plan</div>
        
                <ul class="chooseYourPlan__ul">
                <li class="chooseYourPlan__li">Unlimited Bandwitch</li>
                <li class="chooseYourPlan__li">Encrypted Connection</li>
                <li class="chooseYourPlan__li">No Traffic Logs</li>
                <li class="chooseYourPlan__li">Works on All Devices</li>
                <li class="chooseYourPlan__li">Connect Anyware</li>
                <li class="chooseYourPlan__li">Get New Features</li>
                </ul>
            </div>

            <div>
                <div class="chooseYourPlan__fee"><b>$12</b> / mo</div>
                <button class="btn chooseYourPlan__btn">Select</button>
            </div>
            </div>
        </div>

        <section class="map">
            <h2 class="map__h2">Huge Global Network of Fast VPN</h2>
            <p class="map__p">See LaslesVPN everywhere to make it easier for you when you move locations.</p>

            <div class="map__blockMap">
            <img src="@/assets/img/map.png" alt="" class="map__map">
            </div>

            <div class="map__brands">
            <img src="@/assets/img/netflix.png" alt="" class="map__brend">
            <img src="@/assets/img/reddit.png" alt="" class="map__brend">
            <img src="@/assets/img/amazon.png" alt="" class="map__brend">
            <img src="@/assets/img/discord.png" alt="" class="map__brend">
            <img src="@/assets/img/spotify.png" alt="" class="map__brend">
            
            </div>

        </section>
        </div>
        
    </section>
</template>
<script>
export default {
    name: 'chooseYourPlan'
}
</script>