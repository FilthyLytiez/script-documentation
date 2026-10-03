---
layout: home
hero:
  name: Filthy Lytiez
  text: Script documentation
  tagline: Install guides, configuration references and changelogs for every Filthy Lytiez script. Everything runs through community_bridge, so it works on your framework.
  image:
    src: /images/logo.webp
    alt: Filthy Lytiez
  actions:
    - theme: brand
      text: Get started
      link: /guide/
    - theme: alt
      text: Join our Discord
      link: https://discord.gg/7CHvRKs4KK
---

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="section-title" id="scripts">Scripts</div>
<div class="script-cards">
  <a class="script-card" :href="withBase('/towscenarios/')"><img :src="withBase('/images/towscenarios.jpg')" alt="Tow Scenarios"><div class="body"><div class="name">Tow Scenarios</div><div class="desc">A full tow company with accident scenes, fires, a chop shop and player owned businesses.</div></div></a>
  <a class="script-card" :href="withBase('/winch/')"><img :src="withBase('/images/winch.jpg')" alt="Winch System"><div class="body"><div class="name">Winch System</div><div class="desc">Rope winching for tow trucks with positional winch sound.</div></div></a>
  <a class="script-card" :href="withBase('/pawnshop/')"><img :src="withBase('/images/pawnshop.jpg')" alt="Pawnshop Management"><div class="body"><div class="name">Pawnshop Management</div><div class="desc">A player owned pawnshop with export runs, pricing and employee grades.</div></div></a>
  <a class="script-card" :href="withBase('/moneywash/')"><img :src="withBase('/images/moneywash.jpg')" alt="Money Wash Management"><div class="body"><div class="name">Money Wash Management</div><div class="desc">Wash dirty money through a player owned laundrette.</div></div></a>
  <a class="script-card" :href="withBase('/ammunation/')"><img :src="withBase('/images/ammunation.jpg')" alt="Ammunation Management"><div class="body"><div class="name">Ammunation Management</div><div class="desc">A player owned gun shop where staff craft weapons and stock the shelf.</div></div></a>
  <a class="script-card" :href="withBase('/engineswap/')"><img :src="withBase('/images/engineswap.jpg')" alt="Engine Swap and Dyno"><div class="body"><div class="name">Engine Swap and Dyno</div><div class="desc">A dyno shop where players hear an engine note before they buy it.</div></div></a>
</div>
