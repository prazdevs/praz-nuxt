<script setup lang="ts">
const site = useSiteConfig()
</script>

<template>
  <ul class="socials">
    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="GitHub profile (opens in new tab)"
        :to="site.socials.github"
      >
        <Icon class="icon" name="mingcute:github-line" />
      </NuxtLink>
    </li>

    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="Bluesky profile (opens in new tab)"
        :to="site.socials.bsky"
      >
        <Icon class="icon" name="mingcute:bluesky-social-line" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="LinkedIn profile (opens in new tab)"
        :to="site.socials.linkedin"
      >
        <Icon class="icon" name="mingcute:linkedin-line" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
.socials {
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  margin: var(--spacing-5) 0;
  padding: 0;
}

.link {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: var(--spacing-2);
  font-size: var(--font-size-2xl);
  background-color: var(--color-text);
  border: 2px solid var(--color-text);

  & .icon {
    z-index: 3;
    position: relative;
    color: var(--color-background);
    transition: all var(--transition);
  }

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-background);
    transition: all var(--transition);
    z-index: 2;
  }

  &:hover {
    & .icon {
      color: var(--color-text);
      transform: rotateX(360deg);
    }

    &::before {
      top: 0;
    }
  }

  &:focus-visible {
    outline: solid var(--color-text) 3px;
    outline-offset: var(--spacing-2);
  }
}
</style>
