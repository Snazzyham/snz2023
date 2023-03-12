<script lang="ts">
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

<section
  style="background-color: {activeBg}"
  class="w-screen min-h-screen transition-all flex flex-col  justify-center px-8 lg:px-16"
>
  {#each data as item}
    <a href={`/work/${item.uid}`} class="work-item text-4xl lg:text-6xl mb-6">
      <h3
        class={activeSection != "none" && activeSection != item.uid
          ? "opacity-30 transition-all scale-95"
          : "opacity-100 transition-all"}
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
