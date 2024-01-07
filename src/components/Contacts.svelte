<script lang="ts">
  import Link from './Link.svelte';
  import { type IconDefinition } from '@fortawesome/free-regular-svg-icons';

  import { faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';
  import { faGithub, faGithubAlt, faTelegram } from '@fortawesome/free-brands-svg-icons';

  type LinkWithIcon = {
    icon: IconDefinition;
    hoverIcon?: IconDefinition;
    href: string;
  };

  type SimpleLink = {
    title: string;
    href: string;
  };

  function hasIcon(l: LinkWithIcon | SimpleLink): l is LinkWithIcon {
    return 'icon' in l;
  }

  let links: Array<LinkWithIcon | SimpleLink> = [
    {
      href: 'https://t.me/Koshacha',
      icon: faTelegram,
      hoverIcon: faTelegram
    },
    {
      href: 'mailto:wuvuxd@proton.me',
      icon: faAt,
      hoverIcon: faAt
    },
    {
      href: 'https://github.com/Koshacha',
      icon: faGithubAlt,
      hoverIcon: faGithubAlt
    },
    {
      href: 'https://hh.ru/resume/df437b21ff045d40790039ed1f43325530646d',
      title: 'HeadHunter CV'
    },
    {
      href: 'https://www.linkedin.com/in/ilya-mazunin/',
      title: 'LinkedIn'
    },
    {
      href: 'https://www.upwork.com/freelancers/~01355186bd65b2bf29',
      title: 'Upwork'
    }
  ];
</script>

<div class="contacts">
  {#each links as link (link.href)}
    {#if hasIcon(link)}
      <Link type="with-icon" href={link.href} icon={link.icon} />
    {:else}
      <Link type="simple" href={link.href} text={link.title} />
    {/if}
  {/each}
</div>

<style lang="postcss">
  .contacts {
    @apply flex items-center gap-4 flex-wrap mt-6;
  }
</style>
