<template>
  <section class="about-hero">
    <div class="container">
      <div class="about-hero__content">
        <h1 class="about-hero__title">
          A brand built on the love of craftmanship, quality and outstanding customer service
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-hero {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 710px;
    margin: 0 auto;
    padding: 70px 0;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-36);
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }
}
</style>
