<script lang="ts">
  export let data: HomeProps;

  console.log(data);

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

<section
  class="min-h-screen w-full flex items-center justify-center flex-col font-semibold"
>
  <div class="w-full px-16 text-3xl lg:text-6xl mb-6">
    {#each data.header as heading}
      <h1 class="my-4">{heading.text}</h1>
    {/each}
  </div>
  <div class="w-full px-16 text-xl lg:text-4xl">
    {#each data.subhead_one as sub}
      {#if sub.spans.length > 0}
        <h3 class="max-w-prose">
          {sub.text.slice(0, sub.spans[0].start)}
          <a
            href="/work"
            class="underline underline-offset-4 hover:transition-all hover:opacity-60 hover:underline-offset-1"
            >many more.</a
          >
        </h3>
      {:else}
        <h3 class="max-w-prose">{sub.text}</h3>
      {/if}
    {/each}
    {#each data.subhead_two as sub}
      <h3 class="max-w-prose pt-4">{sub.text}</h3>
    {/each}
  </div>
</section>
