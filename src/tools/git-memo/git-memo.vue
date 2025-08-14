<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { computed, defineAsyncComponent } from 'vue';

const themeVars = useThemeVars();
const { locale } = useI18n();

function getMemoComponent(locale: string) {
  switch (locale) {
    case 'zh':
      return defineAsyncComponent(() => import('./git-memo.content.zh.md'));
    default:
      return defineAsyncComponent(() => import('./git-memo.content.md'));
  }
};

const Memo = computed(() => getMemoComponent(locale.value));
</script>

<template>
  <div>
    <Suspense>
      <component :is="Memo" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="less" scoped>
::v-deep(pre) {
  margin: 0;
  padding: 15px 22px;
  background-color: v-bind('themeVars.cardColor');
  border-radius: 4px;
  overflow: auto;
}
</style>
