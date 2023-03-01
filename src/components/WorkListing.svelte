<script lang="ts">
  import { onMount } from "svelte";

  export let data: any;

  let activeText = "#fff";
  let activeBg = "#000";
  let activeSection = "none";

  function resetValues() {
    activeText = "#fff";
    activeSection = "none";
    activeBg = "#000";
  }

  function onHover(uid: string, primary: string, secondary: string) {
    activeSection = uid;
    activeBg = primary;
    activeText = secondary;
  }
</script>

<section style="background-color: {activeBg}" class="w-screen h-screen">
  {#each data as item}
    <a href={`/work/${item.uid}`}>
      <h3
        class={activeSection != "none" && activeSection != item.data.uid
          ? "opacity-80"
          : "opacity-100"}
        style={activeSection === item.uid
          ? `color: ${activeText};`
          : "color: #fff;"}
        on:mouseenter={() =>
          onHover(item.uid, item.data.primary, item.data.secondary)}
        on:mouseleave={resetValues}
      >
        <span class="font-bold">{item.data.listing_title}</span>
        | {item.data.client}
      </h3>
    </a>
  {/each}
</section>
