/**
 * 根据用户IP自动检测并设置语言
 * 国内IP → 中文 (zh-CN)
 * 国外IP → 英文 (en)
 */
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// 中国大陆的IP段（简化判断，主流云服务商IP段）
const CHINA_IP_PREFIXES = [
  '36.', '39.', '42.', '43.', '49.', '58.', '59.', '60.', '61.',
  '101.', '103.', '106.', '110.', '111.', '112.', '113.', '114.',
  '115.', '116.', '117.', '118.', '119.', '120.', '121.', '122.',
  '123.', '124.', '125.', '139.', '140.', '144.', '150.', '152.',
  '157.', '158.', '159.', '175.', '180.', '182.', '183.', '185.',
  '202.', '203.', '210.', '211.', '218.', '219.', '220.', '221.',
  '222.', '223.', '233.', 'CN'
]

export function useAutoLocale() {
  const { locale } = useI18n()
  const isDetecting = ref(false)
  const detectedCountry = ref(null)
  
  /**
   * 使用 ip-api.com 检测IP位置（免费，无需API Key）
   */
  async function detectLocation() {
    // 如果用户已经手动设置过语言，保持用户选择
    const savedLocale = localStorage.getItem('ai-nav-locale')
    if (savedLocale) {
      return savedLocale
    }

    isDetecting.value = true
    
    try {
      // 使用 ip-api.com 的批量接口（支持HTTPS，免费无限制）
      const response = await fetch('https://ip-api.com/json/?fields=country,countryCode,status')
      const data = await response.json()
      
      if (data.status === 'success') {
        detectedCountry.value = data.countryCode
        
        // 判断是否为中国大陆（countryCode 为 CN）
        if (data.countryCode === 'CN') {
          return 'zh-CN'
        } else {
          return 'en'
        }
      }
    } catch (error) {
      console.warn('IP检测失败，使用默认语言:', error)
    } finally {
      isDetecting.value = false
    }
    
    // 检测失败时，根据浏览器语言判断
    const browserLang = navigator.language || navigator.userLanguage || ''
    if (browserLang.toLowerCase().startsWith('zh')) {
      return 'zh-CN'
    }
    return 'en'
  }

  /**
   * 初始化自动语言设置
   */
  async function initAutoLocale() {
    const autoLocale = await detectLocation()
    
    // 如果用户没有手动设置过，则自动应用
    if (!localStorage.getItem('ai-nav-locale')) {
      locale.value = autoLocale
      localStorage.setItem('ai-nav-locale', autoLocale)
    }
  }

  /**
   * 手动设置语言（用户选择）
   */
  function setLocale(newLocale) {
    locale.value = newLocale
    localStorage.setItem('ai-nav-locale', newLocale)
  }

  return {
    isDetecting,
    detectedCountry,
    initAutoLocale,
    setLocale
  }
}
