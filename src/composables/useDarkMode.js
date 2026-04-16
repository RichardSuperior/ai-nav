import { ref, watchEffect } from 'vue'

const isDark = ref(false)

// 初始化：读取本地存储或系统偏好
function init() {
  const saved = localStorage.getItem('ai-nav-dark')
  if (saved !== null) {
    isDark.value = saved === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

init()

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('ai-nav-dark', isDark.value)
})

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
