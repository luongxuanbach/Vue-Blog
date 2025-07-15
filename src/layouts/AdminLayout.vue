<template>
    <div class="container">
        <header><h1>Admin Panel</h1></header>
        <main>
            <slot />
        </main>
        <footer>© 2025 Bachlx</footer>
    </div>
</template>

<style scoped>
.admin-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}
</style>