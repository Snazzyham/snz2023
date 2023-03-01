<script lang="ts">
  export let data: HomeProps;

  interface HomeProps {
    header: RichText[];
    subhead_one: RichText[];
    subhead_two: RichText[];
    timeline: TimelineItem[];
  }

  interface RichText {
    type: String;
    text: String;
    spans: any;
  }

  interface TimelineItem {
    description: String;
    text: String;
    issolid: Boolean;
  }
</script>

<section>
  <div>
    {#each data.header as heading}
      <h1>{heading.text}</h1>
    {/each}
  </div>
  <div>
    {#each data.subhead_one as sub}
      {#if sub.spans.length > 0}
        <h3>
          {sub.text.slice(0, sub.spans[0].start)} <a href="/work">many more.</a>
        </h3>
      {:else}
        <h3>{sub.text}</h3>
      {/if}
    {/each}
    {#each data.subhead_two as sub}
      <h3>{sub.text}</h3>
    {/each}
  </div>
</section>
