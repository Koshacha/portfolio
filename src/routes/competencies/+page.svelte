<script lang="ts">
  import SkillsSection from '../../components/SkillsSection.svelte';

  export let data;

  let { skills } = data;
</script>

<svelte:head>
  <title>Competencies & Skills</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <div class="flex flex-col gap-2 mb-20 md:mb-0 md:grid md:grid-cols-3 md:gap-3 md:mx-3">
    <div class="col-span-2">
      <SkillsSection items={skills.frontend}>
        <span slot="title">frontend</span>
      </SkillsSection>
    </div>
    <!-- <div class="row-span-3">
      <SkillsSection items={skills.soft}>
        <span slot="title">soft skills</span>
      </SkillsSection>
    </div> -->
    <div class="row-span-3 -order-10 md:order-[unset]">
      <SkillsSection items={skills.learning}>
        <span slot="title">things I'm learning</span>
        <span slot="text">
          Studying popular tools that I might have missed before. Right now I am also interested in
          <a href="https://web3js.readthedocs.io/en/v1.10.0/" rel="nofollow">Web3</a> and I think that
          in the future I will try to explore this technology as well.
        </span>
      </SkillsSection>
    </div>
    <div class="col-span-2">
      <SkillsSection items={skills.backend}>
        <span slot="title">backend</span>
      </SkillsSection>
    </div>
    <div class="col-span-2">
      <SkillsSection items={skills.devops}>
        <span slot="title">devops & other stuff</span>
      </SkillsSection>
    </div>
  </div>
</div>

<style lang="postcss">
</style>
