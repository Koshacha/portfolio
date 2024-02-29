<script lang="ts">
  import Link from './Link.svelte';
  import { type IconDefinition } from '@fortawesome/free-regular-svg-icons';

  import { faAt, faDownload } from '@fortawesome/free-solid-svg-icons';
  import {
    faDiscord,
    faGithubAlt,
    faTelegram,
    faLinkedin,
    faUpwork
  } from '@fortawesome/free-brands-svg-icons';

  type BasicLink = {
    href: string;
    download?: boolean | string;
    lang?: 'ru' | 'en';
    event?: string;
  };

  type LinkWithIcon = BasicLink & {
    icon: IconDefinition;
  };

  type SimpleLink = BasicLink & {
    title: string;
    icon?: IconDefinition;
    iconed?: boolean;
  };

  function hasIcon(l: LinkWithIcon | SimpleLink): l is LinkWithIcon {
    return !('iconed' in l && l.iconed === false) && 'icon' in l;
  }

  let links: Array<LinkWithIcon | SimpleLink>[] = [
    [
      {
        href: 'https://t.me/Koshacha',
        icon: faTelegram,
        event: 'contact-clicked'
      },
      {
        href: 'mailto:wuvuxd@proton.me',
        icon: faAt,
        event: 'contact-clicked'
      },
      {
        href: 'https://discordapp.com/users/316173966827978755',
        icon: faDiscord,
        event: 'contact-clicked'
      },
      {
        href: 'https://github.com/koshacha',
        icon: faGithubAlt,
        event: 'contact-clicked'
      }
    ],
    [
      {
        href: '/cv.pdf',
        title: 'Download CV',
        download: 'Ilya-Mazunin-Frontend-Developer-CV.pdf',
        icon: faDownload,
        event: 'cv-downloaded',
        iconed: false
      },
      // {
      //   href: 'https://hh.ru/resume/df437b21ff045d40790039ed1f43325530646d',
      //   title: 'HeadHunter'
      // },
      {
        href: 'https://www.linkedin.com/in/ilya-mazunin/',
        title: 'LinkedIn',
        icon: faLinkedin,
        event: 'linkedin-opened',
        iconed: false
      },
      {
        href: 'https://www.upwork.com/freelancers/~01355186bd65b2bf29',
        title: 'Upwork',
        icon: faUpwork,
        event: 'upwork-opened',
        iconed: false
      }
    ]
  ];
</script>

<div class="contacts">
  {#each links as linkGroup, index (index)}
    <div class="contacts__group">
      {#each linkGroup as link (link.href)}
        {#if hasIcon(link)}
          <Link type="with-icon" href={link.href} icon={link.icon} event={link.event} />
        {:else}
          <Link
            type="simple"
            href={link.href}
            text={link.title}
            download={link.download}
            icon={link.icon}
            event={link.event}
          />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  .contacts {
    @apply md:flex mt-6;
  }

  .contacts__group {
    @apply flex items-center gap-3 md:gap-4 flex-wrap mb-3 first:md:mr-4;
  }
</style>
