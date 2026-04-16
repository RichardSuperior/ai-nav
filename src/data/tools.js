// AI导航站工具数据

export const categories = [
  {
    id: 'hot',
    name: '热门工具',
    icon: '🔥',
    emoji: '🔥',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    id: 'office',
    name: 'AI 办公工具',
    icon: '💼',
    emoji: '💼',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    children: [
      { id: 'ppt', name: '幻灯片(PPT)' },
      { id: 'mindmap', name: '思维导图' },
      { id: 'doc', name: '文档工具' },
      { id: 'excel', name: 'Excel表格' },
      { id: 'efficiency', name: '效率提升' },
      { id: 'meeting', name: '办公会议' },
    ]
  },
  {
    id: 'writing',
    name: 'AI 写作工具',
    icon: '✍️',
    emoji: '✍️',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'search',
    name: 'AI 搜索工具',
    icon: '🔍',
    emoji: '🔍',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    id: 'coding',
    name: 'AI 编程工具',
    icon: '💻',
    emoji: '💻',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'chat',
    name: 'AI 聊天对话',
    icon: '💬',
    emoji: '💬',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
  {
    id: 'audio',
    name: 'AI 音频工具',
    icon: '🎵',
    emoji: '🎵',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    id: 'video',
    name: 'AI 视频工具',
    icon: '🎬',
    emoji: '🎬',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    id: 'image',
    name: 'AI 图像工具',
    icon: '🎨',
    emoji: '🎨',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    children: [
      { id: 'image-common', name: '常用工具' },
      { id: 'image-bg', name: '背景移除' },
      { id: 'image-person', name: '人物抠除' },
    ]
  },
  {
    id: 'design',
    name: 'AI 设计工具',
    icon: '🖌️',
    emoji: '🖌️',
    color: 'text-fuchsia-500',
    bgColor: 'bg-fuchsia-50',
    borderColor: 'border-fuchsia-200',
  },
  {
    id: 'prompt',
    name: 'AI 指令提示',
    icon: '⚡',
    emoji: '⚡',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    id: 'translation',
    name: 'AI 翻译工具',
    icon: '🌐',
    emoji: '🌐',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
  {
    id: 'detection',
    name: 'AI 内容检测',
    icon: '🛡️',
    emoji: '🛡️',
    color: 'text-slate-500',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
  },
  {
    id: 'law',
    name: 'AI 法律助手',
    icon: '⚖️',
    emoji: '⚖️',
    color: 'text-stone-500',
    bgColor: 'bg-stone-50',
    borderColor: 'border-stone-200',
  },
  {
    id: 'model',
    name: 'AI 开源模型',
    icon: '🤖',
    emoji: '🤖',
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    id: 'learning',
    name: 'AI 学习网站',
    icon: '📚',
    emoji: '📚',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    id: 'framework',
    name: 'AI 开发框架',
    icon: '🔧',
    emoji: '🔧',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  },
]

export const tools = {
  hot: [
    { id: 'liveppt', name: 'LivePPT', desc: '美图设计室推出的AI生成高质量PPT工具', url: 'https://www.meitu.com/', recommended: true, tags: ['PPT', '热门'] },
    { id: 'aippt', name: 'AiPPT', desc: 'AI一键自动生成PPT，海量精品模板', url: 'https://www.aippt.cn/', recommended: true, tags: ['PPT', '热门'] },
    { id: 'marscode', name: 'MarsCode', desc: '字节跳动旗下的编程助手', url: 'https://www.marscode.cn/', recommended: true, tags: ['编程', '热门'] },
    { id: 'deepseek', name: 'DeepSeek', desc: '全新体验，无限可能，DeepSeek-V3', url: 'https://www.deepseek.com/', recommended: true, tags: ['聊天', '热门'] },
    { id: 'grok', name: 'Grok', desc: 'xAI开发的人工智能助手', url: 'https://grok.x.ai/', recommended: true, tags: ['聊天', '热门'] },
    { id: 'claude', name: 'Claude', desc: 'Anthropic开发的大语言模型', url: 'https://claude.ai/', recommended: false, tags: ['聊天', '热门'] },
    { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI旗下AI对话工具', url: 'https://chat.openai.com/', recommended: true, tags: ['聊天', '热门'] },
    { id: 'recraft', name: 'Recraft', desc: 'AI设计神器，生成矢量艺术、3D图像等', url: 'https://www.recraft.ai/', recommended: true, tags: ['设计', '热门'] },
    { id: 'flowith', name: 'Flowith', desc: '节点交互式AI搜索和对话工具', url: 'https://flowith.io/', recommended: true, tags: ['搜索', '热门'] },
    { id: 'copilot', name: 'Copilot', desc: '微软推出的网页版Copilot助手', url: 'https://copilot.microsoft.com/', recommended: false, tags: ['聊天', '热门'] },
    { id: 'midjourney', name: 'Midjourney', desc: 'AI图像和插画生成工具', url: 'https://www.midjourney.com/', recommended: false, tags: ['图像', '热门'] },
    { id: 'sora', name: 'Sora', desc: 'OpenAI推出的AI文本到视频生成模型', url: 'https://sora.com/', recommended: false, tags: ['视频', '热门'] },
    { id: 'suno', name: 'Suno AI', desc: '音乐创作辅助平台', url: 'https://suno.ai/', recommended: false, tags: ['音频', '热门'] },
    { id: '66ailunwen', name: '66AI论文', desc: '仅需3步，5分钟搞定论文', url: 'https://www.66paper.cn/', recommended: true, tags: ['写作', '热门'] },
    { id: 'xuanxiaor', name: '宣小二', desc: '浏览博主，选择平台，上传资料', url: '#', recommended: true, tags: ['营销', '热门'] },
  ],

  ppt: [
    { id: 'gezheai', name: '歌者AI', desc: '彩漩PPT推出的AI PPT生成工具', url: 'https://ppt.caixuan.cc/', recommended: true },
    { id: 'gamma', name: 'Gamma App', desc: 'AI幻灯片演示生成工具', url: 'https://gamma.app/', recommended: true },
    { id: 'wenduoduo', name: '文多多AIPPT', desc: '输入标题或主题自动生成完整PPT', url: 'https://www.wenduoduo.com/', recommended: true },
    { id: 'mindshow', name: 'MindShow', desc: 'AI驱动的演示文稿生成工具', url: 'https://www.mindshow.fun/', recommended: true },
    { id: 'aippt', name: 'AiPPT', desc: 'AI一键自动生成PPT，海量精品模板', url: 'https://www.aippt.cn/', recommended: true },
    { id: 'liveppt', name: 'LivePPT', desc: '美图设计室推出的AI生成高质量PPT工具', url: 'https://www.meitu.com/', recommended: true },
    { id: 'lingganppt', name: '灵感PPT', desc: 'AI智能生成PPT', url: '#', recommended: false },
    { id: 'chatppt', name: 'ChatPPT', desc: 'AI一键对话生成PPT', url: 'https://chat-ppt.com/', recommended: false },
    { id: 'bigeai', name: '比格AI PPT', desc: '高效的AI PPT生成工具', url: '#', recommended: false },
    { id: 'islideai', name: 'iSlide AI', desc: 'iSlide推出的AI PPT生成和设计工具', url: 'https://www.islide.cc/', recommended: false },
    { id: 'wanzhi', name: '万知', desc: '零一万物推出的一站式AI文档阅读和PPT创作', url: 'https://www.wanzhi.com/', recommended: false },
    { id: 'decktopus', name: 'Decktopus AI', desc: 'AI驱动的在线演示文稿生成器', url: 'https://www.decktopus.com/', recommended: false },
    { id: 'xunfeizhiwen', name: '讯飞智文', desc: '科大讯飞的免费AI PPT生成工具', url: 'https://zhiwen.xfyun.cn/', recommended: false },
    { id: 'beautifulai', name: 'beautiful.ai', desc: 'AI创建展示幻灯片', url: 'https://www.beautiful.ai/', recommended: false },
    { id: 'qingzhu', name: '轻竹办公', desc: '在线智能生成和设计PPT的AI工具', url: '#', recommended: false },
    { id: 'slidesai', name: 'SlidesAI', desc: 'AI快速创建演示幻灯片', url: 'https://www.slidesai.io/', recommended: false },
    { id: 'tome', name: 'Tome', desc: 'AI创作叙事性幻灯片', url: 'https://tome.app/', recommended: false },
    { id: 'auxi', name: 'auxi', desc: '功能强大的PowerPoint AI插件', url: '#', recommended: false },
  ],

  mindmap: [
    { id: 'processon', name: 'ProcessOn', desc: '在线AI流程图和思维导图制作工具', url: 'https://www.processon.com/', recommended: true },
    { id: 'yitunaotu', name: '亿图脑图', desc: '亿图脑图AI思维导图助手', url: 'https://www.edrawmind.com/', recommended: true },
    { id: 'taskade', name: 'Taskade', desc: '高价值AI大纲和思维导图生成', url: 'https://www.taskade.com/', recommended: true },
    { id: 'bositai', name: '博思AI白板', desc: 'AI自动生成文字和思维导图', url: '#', recommended: true },
    { id: 'treemind', name: 'TreeMind树图', desc: '新一代AI智能思维导图', url: 'https://shutu.cn/', recommended: false },
    { id: 'xiaohuazhuo', name: '小画桌', desc: '在线协作白板工具', url: '#', recommended: false },
    { id: 'yinxiangtuju', name: '印象图记', desc: '印象AI加持的在线思维导图工具', url: '#', recommended: false },
    { id: 'zhixi', name: '知犀AI', desc: '知犀推出的AI思维导图生成工具', url: 'https://www.zhixi.com/', recommended: false },
    { id: 'xmindai', name: 'Xmind AI', desc: '全功能的云端思维导图和头脑风暴软件', url: 'https://xmind.ai/', recommended: false },
    { id: 'mapify', name: 'Mapify', desc: 'AI将任何内容转换为思维导图', url: 'https://mapify.so/', recommended: false },
    { id: 'whimsical', name: 'Whimsical', desc: '产品团队的迭代工作空间', url: 'https://whimsical.com/', recommended: false },
    { id: 'miroai', name: 'Miro AI', desc: '利用Miro AI加速创新', url: 'https://miro.com/', recommended: false },
  ],

  doc: [
    { id: 'chatdoc', name: 'ChatDOC', desc: '基于ChatGPT的文档阅读工具', url: 'https://chatdoc.com/', recommended: true },
    { id: 'pmai', name: 'PMAI', desc: '面向产品经理的AI助手', url: '#', recommended: true },
    { id: 'notebooklm', name: 'NotebookLM', desc: '谷歌推出的AI笔记应用', url: 'https://notebooklm.google.com/', recommended: false },
    { id: 'wpsai', name: 'WPS AI', desc: 'WPS推出的AI办公助手', url: 'https://ai.wps.cn/', recommended: false },
    { id: 'tongyi-zhiwen', name: '通义智文', desc: '基于通义大模型的AI阅读助手', url: 'https://tongyi.aliyun.com/zhiwen', recommended: false },
    { id: 'pdfai', name: 'PDF.ai', desc: 'AI PDF文档阅读工具', url: 'https://pdf.ai/', recommended: false },
    { id: 'baiduwenku', name: '百度文库AI助手', desc: '基于文心一言的一站式智能文档助手', url: 'https://wenku.baidu.com/', recommended: false },
    { id: 'wanzhi', name: '万知', desc: '零一万物的一站式AI文档阅读', url: 'https://www.wanzhi.com/', recommended: false },
    { id: 'cubox', name: 'Cubox', desc: 'AI阅读学习助手和信息管理工具', url: 'https://cubox.pro/', recommended: false },
    { id: 'txyz', name: 'txyz', desc: 'AI文献阅读和学术研究辅助平台', url: 'https://txyz.ai/', recommended: false },
    { id: 'humata', name: 'Humata', desc: '基于GPT的AI文档分析、阅读和问答工具', url: 'https://www.humata.ai/', recommended: false },
  ],

  excel: [
    { id: 'vika', name: '维格表格', desc: '多维表格AI处理工具', url: 'https://vika.cn/', recommended: true },
    { id: 'bangonghuan', name: '办公小浣熊', desc: '商汤科技推出的AI办公助手', url: '#', recommended: false },
    { id: 'sheetplus', name: 'Sheet+', desc: 'Excel和Google Sheets表格AI处理工具', url: 'https://sheetplus.ai/', recommended: false },
    { id: 'formulabot', name: 'Formula bot', desc: 'AI将指令转换成Excel的函数公式', url: 'https://formulabot.com/', recommended: false },
    { id: 'rows', name: 'Rows', desc: '集成了AI功能的在线表格处理工具', url: 'https://rows.com/', recommended: false },
    { id: 'excellyai', name: 'Excelly-AI', desc: '将文本转换成Excel或Google Sheets公式', url: '#', recommended: false },
    { id: 'chatexcel', name: '酷表ChatExcel', desc: 'AI Excel数据分析辅助工具', url: '#', recommended: false },
    { id: 'baidugbi', name: '百度GBI', desc: '百度推出的全球商业智能平台', url: '#', recommended: false },
  ],

  efficiency: [
    { id: 'zhitu', name: '职徒简历', desc: '智能简历制作软件', url: '#', recommended: true },
    { id: 'tinywow', name: 'TinyWow', desc: '免费在线AI工具箱', url: 'https://tinywow.com/', recommended: false },
    { id: 'ima', name: 'ima.copilot', desc: '腾讯推出的AI智能工作台产品', url: 'https://ima.qq.com/', recommended: false },
    { id: 'notebooklm', name: 'NotebookLM', desc: '谷歌推出的AI笔记应用', url: 'https://notebooklm.google.com/', recommended: false },
    { id: 'raycastai', name: 'Raycast AI', desc: 'Raycast推出的Mac AI助手', url: 'https://www.raycast.com/', recommended: false },
    { id: 'zapierai', name: 'Zapier AI', desc: 'Zapier推出的AI自动化集成功能', url: 'https://zapier.com/', recommended: false },
    { id: 'monica', name: 'Monica', desc: '全能AI助手', url: 'https://monica.im/', recommended: false },
    { id: 'merlin', name: 'Merlin', desc: '基于ChatGPT的Chrome浏览器扩展', url: '#', recommended: false },
    { id: 'wpslinxi', name: 'WPS灵犀', desc: 'WPS推出的AI办公助手', url: 'https://lingxi.wps.cn/', recommended: false },
    { id: 'sodaoffice', name: '苏打办公', desc: '360公司推出的一站式AI办公工具', url: '#', recommended: false },
  ],

  meeting: [
    { id: 'fireflies', name: 'Fireflies.ai', desc: 'AI会议转录和会议纪要生成工具', url: 'https://fireflies.ai/', recommended: false },
    { id: 'zoomworkplace', name: 'Zoom Workplace', desc: 'Zoom推出的AI办公协作和交流沟通平台', url: 'https://zoom.us/', recommended: false },
    { id: 'xunfeimeeting', name: '讯飞会议', desc: 'AI智能会议系统', url: 'https://meeting.iflyrec.com/', recommended: false },
    { id: 'otterai', name: 'Otter.ai', desc: 'AI会议内容生成和实时转录', url: 'https://otter.ai/', recommended: false },
    { id: 'tencentmeeting', name: '腾讯会议AI小助手', desc: '腾讯会议推出的AI会议内容助理', url: 'https://meeting.tencent.com/', recommended: false },
    { id: 'noty', name: 'Noty.ai', desc: 'ChatGPT驱动的AI会议转录工具', url: 'https://noty.ai/', recommended: false },
    { id: 'feishumiaoji', name: '飞书妙记', desc: '飞书智能会议纪要和快捷语音转文字', url: 'https://www.feishu.cn/', recommended: false },
    { id: 'tongyitingwu', name: '通义听悟', desc: '阿里推出的AI会议转录工具', url: 'https://tingwu.aliyun.com/', recommended: false },
    { id: 'tingnao', name: '听脑AI', desc: '人工智能语音录音记录助手', url: '#', recommended: false },
    { id: 'airgram', name: 'Airgram', desc: '自动会议笔记和总结的AI助手', url: 'https://www.airgram.io/', recommended: false },
  ],

  writing: [
    { id: 'xiaoyuxiezuo', name: '小鱼写作', desc: 'AI自动生成高质量原创内容', url: '#', recommended: true },
    { id: 'xiaowenlunwen', name: '小文AI论文', desc: 'AI一键辅助创作', url: '#', recommended: true },
    { id: 'mitaxiezuo', name: '秘塔写作猫', desc: 'AI写作，文章自成', url: 'https://xiezuocat.com/', recommended: true },
    { id: 'huoshanzw', name: '火山写作', desc: '字节跳动推出的免费AI写作助手', url: '#', recommended: false },
    { id: 'copyai', name: 'Copy.ai', desc: '人工智能营销文案和内容创作工具', url: 'https://www.copy.ai/', recommended: false },
    { id: 'jasper', name: 'Jasper', desc: 'AI文字内容创作工具', url: 'https://www.jasper.ai/', recommended: false },
    { id: 'grammarly', name: 'Grammarly', desc: 'AI英语语法和拼写检查写作助手', url: 'https://www.grammarly.com/', recommended: false },
    { id: 'notionai', name: 'Notion AI', desc: 'Notion推出的AI内容创作助手', url: 'https://www.notion.so/', recommended: false },
    { id: 'jenni', name: 'Jenni', desc: 'AI研究文章和博客写作辅助工具', url: 'https://jenni.ai/', recommended: false },
    { id: 'rytr', name: 'Rytr', desc: 'AI内容生成和写作助手', url: 'https://rytr.me/', recommended: false },
    { id: 'writesonic', name: 'Writesonic', desc: 'AI写作，文案，释义工具', url: 'https://writesonic.com/', recommended: false },
    { id: 'xinhuamiaob', name: '新华妙笔', desc: '新华社推出的AI公文写作平台', url: '#', recommended: false },
    { id: 'deepl-write', name: 'DeepL Write', desc: 'DeepL推出的AI驱动的写作助手', url: 'https://www.deepl.com/write', recommended: false },
    { id: 'quillbot', name: 'QuillBot', desc: 'AI英/德语写作润色和改进工具', url: 'https://quillbot.com/', recommended: false },
    { id: 'biliinglai', name: '笔灵AI写作', desc: '面向专业写作领域的AI写作工具', url: 'https://ibiling.cn/', recommended: false },
    { id: 'notegpt', name: 'NoteGPT', desc: '免费的AI总结工具和AI生成器', url: 'https://notegpt.io/', recommended: false },
  ],

  search: [
    { id: 'phind', name: 'Phind', desc: '专为开发者设计的AI搜索引擎', url: 'https://www.phind.com/', recommended: true },
    { id: 'flowith', name: 'Flowith', desc: '节点交互式AI搜索和对话工具', url: 'https://flowith.io/', recommended: true },
    { id: 'mita-search', name: '秘塔AI搜索', desc: '秘塔科技推出的AI搜索引擎', url: 'https://metaso.cn/', recommended: false },
    { id: 'perplexity', name: 'Perplexity', desc: '强大的对话式AI搜索引擎', url: 'https://www.perplexity.ai/', recommended: false },
    { id: 'searchgpt', name: 'SearchGPT', desc: 'OpenAI推出的AI搜索引擎', url: 'https://chatgpt.com/', recommended: false },
    { id: 'tianggong-search', name: '天工AI搜索', desc: '昆仑万维推出的结合大模型的AI搜索引擎', url: 'https://www.tiangong.cn/', recommended: false },
    { id: 'consensus', name: 'Consensus', desc: 'AI科研学术搜索引擎', url: 'https://consensus.app/', recommended: false },
    { id: 'globe', name: 'Globe Explorer', desc: '结构化AI知识搜索引擎', url: 'https://globe.engineer/', recommended: false },
    { id: '360ai-search', name: '360AI搜索', desc: '360推出的新一代AI搜索引擎', url: 'https://www.sou.com/', recommended: false },
    { id: 'bochai', name: '博查AI搜索', desc: '支持多模型的AI搜索引擎', url: '#', recommended: false },
  ],

  coding: [
    { id: 'marscode', name: 'MarsCode', desc: '字节跳动旗下的编程助手', url: 'https://www.marscode.cn/', recommended: true },
    { id: 'trae', name: 'Trae', desc: '字节跳动旗下的免费IDE', url: 'https://trae.ai/', recommended: true },
    { id: 'cursor', name: 'Cursor', desc: 'AI代码编辑器', url: 'https://cursor.sh/', recommended: true },
    { id: 'windsurf', name: 'Windsurf', desc: 'Codeium推出的AI代码编辑器', url: 'https://codeium.com/windsurf', recommended: true },
    { id: 'githubcopilot', name: 'GitHub Copilot', desc: 'GitHub推出的AI编程工具', url: 'https://github.com/features/copilot', recommended: true },
    { id: 'comate', name: 'Comate', desc: '百度推出的AI编程助手', url: 'https://comate.baidu.com/', recommended: true },
    { id: 'tongyilingma', name: '通义灵码', desc: '阿里推出的免费AI编程工具', url: 'https://lingma.aliyun.com/', recommended: false },
    { id: 'codewhisperer', name: 'CodeWhisperer', desc: '亚马逊推出的免费AI编程助手', url: 'https://aws.amazon.com/codewhisperer/', recommended: false },
    { id: 'codegeex', name: 'CodeGeeX', desc: '智谱AI推出的免费AI编程助手', url: 'https://codegeex.cn/', recommended: false },
    { id: 'devin', name: 'Devin', desc: '首个全自主的AI软件工程师智能体', url: 'https://www.cognition.ai/', recommended: false },
    { id: 'v0dev', name: 'v0.dev', desc: 'AI生成前端React/UI组件', url: 'https://v0.dev/', recommended: false },
    { id: 'codeium', name: 'Codeium', desc: '免费的AI编程工具', url: 'https://codeium.com/', recommended: false },
    { id: 'tabnine', name: 'Tabnine', desc: 'AI代码自动补全编程助手', url: 'https://www.tabnine.com/', recommended: false },
    { id: 'warp', name: 'Warp', desc: '终端工具内置AI命令搜索', url: 'https://www.warp.dev/', recommended: false },
    { id: 'iFlyCode', name: 'iFlyCode', desc: '科大讯飞推出的智能编程助手', url: '#', recommended: false },
  ],

  chat: [
    { id: 'deepseek', name: 'DeepSeek', desc: '全新体验，无限可能，DeepSeek-V3', url: 'https://www.deepseek.com/', recommended: true },
    { id: 'grok', name: 'Grok', desc: 'xAI开发的人工智能助手', url: 'https://grok.x.ai/', recommended: true },
    { id: 'kimi', name: 'Kimi', desc: '月之暗面Moonshot AI推出的聊天机器人', url: 'https://kimi.moonshot.cn/', recommended: true },
    { id: 'coze', name: 'Coze', desc: '字节跳动旗下的AI聊天机器人构建平台', url: 'https://www.coze.cn/', recommended: true },
    { id: 'chatgpt', name: 'ChatGPT', desc: 'OpenAI旗下AI对话工具', url: 'https://chat.openai.com/', recommended: true },
    { id: 'claude', name: 'Claude', desc: 'Anthropic开发的大语言模型', url: 'https://claude.ai/', recommended: false },
    { id: 'wenxinyiyan', name: '文心一言', desc: '百度推出的基于文心大模型的AI对话互动工具', url: 'https://yiyan.baidu.com/', recommended: false },
    { id: 'tongyi', name: '通义千问', desc: '阿里巴巴推出的类ChatGPT响应人类指令的大模型', url: 'https://qianwen.aliyun.com/', recommended: false },
    { id: 'doubao', name: '豆包', desc: '字节跳动最新推出的免费AI对话助手', url: 'https://www.doubao.com/', recommended: false },
    { id: 'zhipuqingyan', name: '智谱清言', desc: '智谱AI推出的生成式AI助手', url: 'https://chatglm.cn/', recommended: false },
    { id: 'xunfei-spark', name: '讯飞星火大模型', desc: '科大讯飞的类ChatGPT的讯飞星火认知大模型', url: 'https://xinghuo.xfyun.cn/', recommended: false },
    { id: 'hailuo', name: '海螺问问', desc: 'MiniMax推出的免费AI智能聊天助理', url: 'https://hailuoai.com/', recommended: false },
    { id: 'lechat', name: 'Le Chat', desc: 'Mistral AI旗下AI对话工具', url: 'https://chat.mistral.ai/', recommended: false },
    { id: 'huggingchat', name: 'HuggingChat', desc: 'HuggingFace推出的在线聊天机器人', url: 'https://huggingface.co/chat/', recommended: false },
  ],

  audio: [
    { id: 'sunoai', name: 'Suno AI', desc: '音乐创作辅助平台', url: 'https://suno.ai/', recommended: false },
    { id: 'remusic', name: 'Remusic', desc: '免费的AI音乐、歌曲创作工具', url: '#', recommended: true },
    { id: 'lalalai', name: 'LALAL.AI', desc: 'AI人声乐器分离和提取', url: 'https://www.lalal.ai/', recommended: false },
    { id: 'elevenlabs', name: 'ElevenLabs', desc: 'AI文本转语音，支持包含中文在内的28种语言', url: 'https://elevenlabs.io/', recommended: false },
    { id: 'adobepodcast', name: 'Adobe Podcast', desc: 'Adobe推出的在线AI音频录制和编辑工具', url: 'https://podcast.adobe.com/', recommended: false },
    { id: 'lanwenai', name: '蓝闻AI', desc: '云知声旗下的AI配音和声音克隆平台', url: '#', recommended: false },
    { id: 'moyin', name: '魔音工坊', desc: 'AI配音软件', url: '#', recommended: false },
    { id: 'deepgram', name: 'Deepgram', desc: '快速低成本的AI语音文本互转API平台', url: 'https://deepgram.com/', recommended: false },
    { id: 'stableaudio', name: 'Stable Audio', desc: 'Stability AI最新推出的音乐生成工具', url: '#', recommended: false },
    { id: 'riffusion', name: 'Riffusion', desc: 'AI生成不同风格的音乐，免费开源', url: 'https://www.riffusion.com/', recommended: false },
    { id: 'mubert', name: 'Mubert', desc: 'AI BGM背景音乐生成工具', url: 'https://mubert.com/', recommended: false },
    { id: 'soundraw', name: 'Soundraw', desc: 'AI音乐生成工具', url: 'https://soundraw.io/', recommended: false },
    { id: 'playht', name: 'Play.ht', desc: '超真实在线AI语音生成', url: 'https://play.ht/', recommended: false },
    { id: 'murfi', name: 'Murf AI', desc: 'AI文本转语音生成工具', url: 'https://murf.ai/', recommended: false },
  ],

  video: [
    { id: 'tencentyingying', name: '腾讯智影', desc: '腾讯推出的在线智能视频创作平台', url: 'https://zenvideo.qq.com/', recommended: true },
    { id: 'cococlip', name: 'Cococlip.AI', desc: '使用AI视频编辑器创建从文本到视频', url: '#', recommended: true },
    { id: 'sora', name: 'Sora', desc: 'OpenAI推出的AI文本到视频生成模型', url: 'https://sora.com/', recommended: false },
    { id: 'runway', name: 'Runway', desc: '强大的AI视频制作工具', url: 'https://runwayml.com/', recommended: false },
    { id: 'd-id', name: 'D-ID', desc: 'AI真人口播视频生成工具', url: 'https://www.d-id.com/', recommended: false },
    { id: 'heygen', name: 'HeyGen', desc: 'AIGC视频创建平台', url: 'https://www.heygen.com/', recommended: false },
    { id: 'pika', name: 'Pika', desc: 'Pika Labs推出的AI视频生成和编辑工具', url: 'https://pika.art/', recommended: false },
    { id: 'yizhanmiaochuang', name: '一帧秒创', desc: '简单好用的AI智能视频创作平台', url: 'https://aigc.yizhentv.com/', recommended: false },
    { id: 'jiuichuang', name: '即创', desc: '抖音推出的一站式智能创作平台', url: '#', recommended: false },
    { id: 'stable-video', name: 'Stable Video', desc: 'Stability AI上线的AI视频生成工具', url: '#', recommended: false },
    { id: 'fliki', name: 'Fliki', desc: 'AI文字转视频并配音', url: 'https://fliki.ai/', recommended: false },
    { id: 'haiper', name: 'Haiper', desc: 'AI视频生成和重绘工具', url: 'https://haiper.ai/', recommended: false },
    { id: 'lumen5', name: 'Lumen5', desc: 'AI将博客文章转成视频', url: 'https://lumen5.com/', recommended: false },
  ],

  'image-common': [
    { id: 'dreamina', name: 'Dreamina', desc: '抖音旗下推出的AI图片创作工具', url: 'https://dreamina.capcut.com/', recommended: true },
    { id: 'duiyou', name: '堆友AI', desc: '阿里旗下堆友推出的多风格AI绘画生成器', url: 'https://d.design/', recommended: true },
    { id: 'midjourney', name: 'Midjourney', desc: 'AI图像和插画生成工具', url: 'https://www.midjourney.com/', recommended: false },
    { id: 'stable-diffusion', name: 'Stable Diffusion', desc: 'StabilityAI推出的文本到图像生成AI', url: 'https://stability.ai/', recommended: false },
    { id: 'bing-image', name: 'Bing Image Creator', desc: '微软必应推出的图像生成工具', url: 'https://www.bing.com/images/create', recommended: false },
    { id: 'adobe-firefly', name: 'Adobe Firefly', desc: 'Adobe最新推出的AI图片生成工具', url: 'https://www.adobe.com/products/firefly.html', recommended: false },
    { id: 'wenxin-yige', name: '文心一格', desc: 'AI艺术和创意辅助平台', url: 'https://yige.baidu.com/', recommended: false },
    { id: 'tongyi-wanxiang', name: '通义万相', desc: '阿里最新推出的AI绘画创作模型', url: 'https://tongyi.aliyun.com/wanxiang', recommended: false },
    { id: 'liblibal', name: 'LiblibAI·哩布哩布AI', desc: '国内领先的AI图像创作平台和模型分享社区', url: 'https://www.liblib.art/', recommended: false },
    { id: 'leonardoai', name: 'Leonardo.ai', desc: '免费的AI绘画和图像生成工具和社区', url: 'https://leonardo.ai/', recommended: false },
    { id: 'civitai', name: 'Civitai', desc: '免费的AI图像绘画作品和模型分享平台和社区', url: 'https://civitai.com/', recommended: false },
    { id: 'flux1', name: 'FLUX.1', desc: 'FLUX.1提供了一个免费的在线图像生成器', url: '#', recommended: false },
    { id: 'removebg', name: 'remove.bg', desc: '强大的AI图片背景移除工具', url: 'https://www.remove.bg/', recommended: false },
    { id: 'upscayl', name: 'Upscayl', desc: '免费开源的AI图片无损放大工具', url: 'https://upscayl.org/', recommended: false },
    { id: 'whee', name: 'WHEE', desc: '美图推出的AI图片和绘画创作生成平台', url: '#', recommended: false },
  ],

  'image-bg': [
    { id: 'wantu-koug', name: '顽兔抠图', desc: '阿里推出的一键去除商品图背景工具', url: '#', recommended: true },
    { id: 'picwish', name: 'PicWish', desc: 'AI图片编辑和背景移除', url: 'https://picwish.com/', recommended: false },
    { id: 'removebg', name: 'remove.bg', desc: '强大的AI图片背景移除工具', url: 'https://www.remove.bg/', recommended: false },
    { id: 'photoroom', name: 'PhotoRoom', desc: '免费的AI图片背景移除和添加', url: 'https://www.photoroom.com/', recommended: false },
    { id: 'cutoutpro', name: 'Cutout.Pro', desc: 'AI图片处理', url: 'https://www.cutout.pro/', recommended: false },
    { id: 'clipdrop-remove', name: 'ClipDrop Remove', desc: 'ClipDrop出品的AI图片背景移除工具', url: 'https://clipdrop.co/remove-background', recommended: false },
    { id: 'meitukoug', name: '美图抠图', desc: '美图秀秀推出的AI智能抠图工具', url: '#', recommended: false },
    { id: 'bgsub', name: 'BgSub', desc: '免费的保护隐私的AI图片背景去除工具', url: 'https://bgsub.cn/', recommended: false },
    { id: 'erasebg', name: 'Erase.bg', desc: '在线抠图和去除图片背景', url: 'https://www.erase.bg/', recommended: false },
  ],

  'image-person': [
    { id: 'hama', name: 'Hama', desc: '在线抹除图片中不想要的物体', url: 'https://www.hama.app/', recommended: false },
    { id: 'bgeraser', name: 'Bg Eraser', desc: '图片物体移除和清理', url: '#', recommended: false },
    { id: 'snapedit', name: 'SnapEdit', desc: 'AI移除图片中的任何物体', url: 'https://snapedit.app/', recommended: false },
    { id: 'cleanup', name: 'Cleanup.pictures', desc: '智能移除图片中的物体、文字、污渍、人物或任何不想要的东西', url: 'https://cleanup.pictures/', recommended: false },
    { id: 'magic-eraser', name: 'Magic Eraser', desc: 'AI移除图片中不想要的物体', url: '#', recommended: false },
    { id: 'watermark-remover', name: 'WatermarkRemover', desc: 'AI智能删除照片中的水印', url: '#', recommended: false },
  ],

  design: [
    { id: '135ai', name: '135 AI排版', desc: 'AI一键生成高颜值图文排版', url: 'https://www.135editor.com/', recommended: true },
    { id: 'collovai', name: 'Collov AI', desc: 'AI室内家居设计生成平台', url: 'https://collov.ai/', recommended: false },
    { id: 'logodlivery', name: 'LogoliveryAI', desc: '免费的AI Logo生成器', url: '#', recommended: false },
    { id: 'creatie', name: 'Creatie', desc: 'AI驱动的UI和UX设计工具', url: 'https://creatie.ai/', recommended: false },
    { id: 'figjamai', name: 'FigJam AI', desc: 'Figma推出的AI白板协作设计工具', url: 'https://www.figma.com/', recommended: false },
    { id: 'vectorizer', name: 'Vectorizer.AI', desc: 'AI一键将位图转换为矢量图像', url: 'https://vectorizer.ai/', recommended: false },
    { id: 'kittl', name: 'Kittl', desc: 'AI驱动的平面图形设计工具', url: 'https://www.kittl.com/', recommended: false },
    { id: 'looka', name: 'Looka', desc: 'AI在线设计和生成Logo', url: 'https://looka.com/', recommended: false },
    { id: 'canva', name: 'Magic Design', desc: '在线设计工具Canva推出的AI设计工具', url: 'https://www.canva.com/', recommended: false },
    { id: 'microsoft-designer', name: 'Microsoft Designer', desc: '微软推出的在线设计海报和宣传图工具', url: 'https://designer.microsoft.com/', recommended: false },
    { id: 'splineai', name: 'Spline AI', desc: 'Spline推出的AI生成3D物体、动画、材质', url: 'https://spline.design/', recommended: false },
    { id: 'recraftai', name: 'Recraft AI', desc: '免费无限AI画板', url: 'https://www.recraft.ai/', recommended: false },
    { id: 'framer', name: 'Framer AI', desc: 'Framer推出的AI网站自动设计、生成和上线', url: 'https://www.framer.com/', recommended: false },
    { id: 'doraai', name: 'Dora AI', desc: 'AI在线生成精美3D动画的网站', url: 'https://www.dora.run/', recommended: false },
    { id: 'wegic', name: 'Wegic', desc: 'AI网页设计和建站开发工具', url: 'https://wegic.ai/', recommended: false },
  ],

  prompt: [
    { id: 'aishort', name: 'AI Short', desc: 'AI提示词管理和共享平台', url: 'https://www.aishort.top/', recommended: false },
    { id: 'publicprompts', name: 'PublicPrompts', desc: '免费高质量的Prompts集合', url: 'https://publicprompts.art/', recommended: false },
    { id: 'flowgpt', name: 'FlowGPT', desc: 'ChatGPT指令大全', url: 'https://flowgpt.com/', recommended: false },
    { id: 'promptperfect', name: 'PromptPerfect', desc: '专业的提示词优化工具', url: 'https://promptperfect.jina.ai/', recommended: false },
    { id: 'promptbase', name: 'PromptBase', desc: 'AI Prompts集合市场', url: 'https://promptbase.com/', recommended: false },
    { id: 'chatgptshortcut', name: 'ChatGPT Shortcut', desc: '开源的简单易用的ChatGPT快捷指令', url: 'https://www.aishort.top/', recommended: false },
    { id: 'prompthero', name: 'PromptHero', desc: '发现Stable Diffusion、ChatGPT和Midjourney的提示用语', url: 'https://prompthero.com/', recommended: false },
    { id: 'cihun', name: '词魂', desc: 'AIGC精品提示词库', url: '#', recommended: false },
    { id: 'langgpt', name: 'LangGPT', desc: '帮助用户编写高质量的提示词', url: '#', recommended: false },
    { id: 'learning-prompt', name: 'Learning Prompt', desc: '免费的Prompt Engineering教程', url: 'https://learningprompt.wiki/', recommended: false },
  ],

  translation: [
    { id: 'immersive-translate', name: '沉浸式翻译', desc: '全网口碑炸裂的双语对照网页翻译插件', url: 'https://immersivetranslate.com/', recommended: true },
    { id: 'xiangjitranslate', name: '象寄翻译', desc: 'AI图片和视频翻译神器', url: '#', recommended: true },
    { id: 'deepl', name: 'DeepL翻译', desc: '准确的人工智能翻译工具', url: 'https://www.deepl.com/', recommended: false },
    { id: 'ali-translate', name: '阿里翻译', desc: '阿里巴巴达摩院推出的多领域多语种的在线机器翻译', url: 'https://translate.alibaba.com/', recommended: false },
    { id: 'huoshan-translate', name: '火山翻译', desc: '字节跳动推出的智能翻译工具', url: 'https://translate.volcengine.com/', recommended: false },
    { id: 'bing-translate', name: '必应翻译', desc: '微软必应推出的翻译工具', url: 'https://www.bing.com/translator', recommended: false },
    { id: 'google-translate', name: 'Google翻译', desc: 'Google免费提供的上百种语言智能翻译工具', url: 'https://translate.google.com/', recommended: false },
    { id: 'baidu-translate', name: '百度翻译', desc: '200种语言互译、沟通全世界', url: 'https://fanyi.baidu.com/', recommended: false },
    { id: 'tencent-translate', name: '腾讯翻译君', desc: '你免费的随身翻译', url: 'https://fanyi.qq.com/', recommended: false },
    { id: 'xunfei-translate', name: '讯飞智能翻译', desc: '科大讯飞推出的人工智能翻译平台', url: '#', recommended: false },
    { id: 'sogou-translate', name: '搜狗翻译', desc: '你的贴身智能翻译专家', url: 'https://fanyi.sogou.com/', recommended: false },
    { id: 'caiyun-translate', name: '彩云小译', desc: '兼具中日英同声传译、文档翻译和网页翻译的智能翻译工具', url: 'https://fanyi.caiyunapp.com/', recommended: false },
  ],

  detection: [
    { id: 'gptzero', name: 'GPTZero', desc: '超过百万人都在用的免费AI内容检测工具', url: 'https://gptzero.me/', recommended: false },
    { id: 'copyleaks', name: 'CopyLeaks', desc: 'AI内容检测和分级', url: 'https://copyleaks.com/', recommended: false },
    { id: 'writecream', name: 'Writecream Detector', desc: 'Writecream推出的AI内容检测工具', url: 'https://www.writecream.com/', recommended: false },
    { id: 'originality', name: 'Originality.AI', desc: '原创度和AI内容检测', url: 'https://originality.ai/', recommended: false },
    { id: 'xdetector', name: 'X Detector', desc: '最值得信赖的多语言AI内容检测器', url: '#', recommended: false },
    { id: 'winstonai', name: 'Winston AI', desc: '强大的AI内容检测解决方案', url: 'https://gowinston.ai/', recommended: false },
    { id: 'aiseo', name: 'AISEO AI Detector', desc: 'AISEO推出的AI内容检测器', url: '#', recommended: false },
  ],

  law: [
    { id: 'tongyifawei', name: '通义法睿', desc: '阿里推出的免费AI法律顾问助手', url: 'https://tongyi.aliyun.com/farui', recommended: false },
    { id: 'faxingbao', name: '法行宝', desc: '百度推出的免费AI法律助手', url: '#', recommended: false },
    { id: 'hesousou', name: '合同嗖嗖', desc: '专业的AI法律合同生成工具', url: '#', recommended: false },
    { id: 'chatlaw', name: 'ChatLaw', desc: '北大开源的法律大模型和助手', url: '#', recommended: false },
    { id: 'fazhi', name: '法智', desc: '同花顺推出的AI法律助手', url: '#', recommended: false },
    { id: 'yuandianzhiku', name: '元典智库', desc: '智能法律知识服务平台和搜索引擎', url: '#', recommended: false },
    { id: 'hairuizhifa', name: '海瑞智法', desc: '一站式AI法律和咨询助手', url: '#', recommended: false },
  ],

  model: [
    { id: 'deepseek', name: 'DeepSeek', desc: '全新体验，无限可能，DeepSeek-V3', url: 'https://www.deepseek.com/', recommended: true },
    { id: 'stable-diffusion', name: 'Stable Diffusion', desc: 'StabilityAI推出的文本到图像生成AI', url: 'https://stability.ai/', recommended: false },
    { id: 'llama', name: 'LLaMA', desc: 'Meta(Facebook)推出的AI大语言模型', url: '#', recommended: false },
    { id: 'gemma', name: 'Gemma', desc: '谷歌推出的新一代轻量级开放模型', url: '#', recommended: false },
    { id: 'ollama', name: 'Ollama', desc: '本地运行Llama和其他大语言模型', url: 'https://ollama.ai/', recommended: false },
    { id: 'gpt4', name: 'GPT-4', desc: 'OpenAI旗下最新的GPT-4模型', url: 'https://openai.com/', recommended: false },
    { id: 'autogpt', name: 'Auto-GPT', desc: '爆火的实现GPT-4完全自主的实验性开源项目', url: 'https://github.com/Significant-Gravitas/AutoGPT', recommended: false },
    { id: 'huggingface', name: 'HuggingFace', desc: 'AI模型开发社区', url: 'https://huggingface.co/', recommended: false },
    { id: 'wenxin-damo', name: '文心大模型', desc: '百度推出的产业级知识增强大模型', url: 'https://wenxin.baidu.com/', recommended: false },
    { id: 'moshdao', name: '魔搭社区', desc: '阿里达摩院推出的AI模型社区', url: 'https://modelscope.cn/', recommended: false },
    { id: 'dall-e3', name: 'DALL·E 3', desc: 'OpenAI旗下最新的图像生成模型', url: 'https://openai.com/dall-e-3', recommended: false },
    { id: 'coze', name: 'Coze', desc: '字节跳动旗下的AI聊天机器人构建平台', url: 'https://www.coze.cn/', recommended: false },
  ],

  learning: [
    { id: 'fastai', name: 'fast.ai', desc: '免费开源的深度学习和AI学习网站', url: 'https://www.fast.ai/', recommended: false },
    { id: 'coursera', name: 'Coursera', desc: '知名MOOC平台', url: 'https://www.coursera.org/', recommended: false },
    { id: 'deeplearningai', name: 'DeepLearning.AI', desc: '深度学习和人工智能学习平台', url: 'https://www.deeplearning.ai/', recommended: false },
    { id: 'elementsofai', name: 'Elements of AI', desc: '免费在线AI通识学习', url: 'https://www.elementsofai.com/', recommended: false },
    { id: 'dongshoushendu', name: '动手学深度学习', desc: '动手学深度学习的教材和课程', url: 'https://d2l.ai/', recommended: false },
    { id: 'microsoft-ai', name: 'Generative AI', desc: '微软推出的面向初学者的免费生成式人工智能课程', url: 'https://microsoft.github.io/generative-ai-for-beginners/', recommended: false },
    { id: 'kaggle', name: 'Kaggle', desc: '机器学习和数据科学社区', url: 'https://www.kaggle.com/', recommended: false },
    { id: 'feijianai', name: '飞桨AI Studio', desc: '人工智能学习实训社区', url: 'https://aistudio.baidu.com/', recommended: false },
    { id: 'aidaxue', name: 'AI大学堂', desc: '科大讯飞推出的AI大学堂', url: 'https://www.aidaxue.com/', recommended: false },
    { id: 'aliyunai', name: '阿里云AI学习路线', desc: '阿里云推出的人工智能学习路线', url: 'https://edu.aliyun.com/roadmap/ai', recommended: false },
    { id: 'googleai', name: 'Google AI', desc: 'Google AI学习平台', url: 'https://ai.google/', recommended: false },
    { id: 'udacity', name: 'Udacity AI学院', desc: 'Udacity推出的School of AI', url: 'https://www.udacity.com/school/school-of-ai', recommended: false },
  ],

  framework: [
    { id: 'tensorflow', name: 'TensorFlow', desc: 'Google推出的机器学习和人工智能开源库', url: 'https://www.tensorflow.org/', recommended: false },
    { id: 'pytorch', name: 'PyTorch', desc: '开源机器学习框架', url: 'https://pytorch.org/', recommended: false },
    { id: 'paddlepaddle', name: '飞桨PaddlePaddle', desc: '开源深度学习平台', url: 'https://www.paddlepaddle.org.cn/', recommended: false },
    { id: 'mindspore', name: '昇思MindSpore', desc: '华为开源自研AI深度学习框架', url: 'https://www.mindspore.cn/', recommended: false },
    { id: 'scikit-learn', name: 'Scikit-learn', desc: 'Python机器学习库', url: 'https://scikit-learn.org/', recommended: false },
    { id: 'keras', name: 'Keras', desc: 'Python版本的TensorFlow深度学习API', url: 'https://keras.io/', recommended: false },
    { id: 'numpy', name: 'NumPy', desc: 'Python科学计算必备的包', url: 'https://numpy.org/', recommended: false },
    { id: 'langchain', name: 'LangChain', desc: '开发由语言模型驱动的应用程序的框架', url: 'https://python.langchain.com/', recommended: false },
    { id: 'huggingface-lib', name: 'HuggingFace Transformers', desc: 'HuggingFace开源NLP工具库', url: 'https://huggingface.co/transformers/', recommended: false },
    { id: 'vercel-ai', name: 'Vercel AI SDK', desc: 'Vercel开源的搭建AI聊天机器人的开发套件', url: 'https://sdk.vercel.ai/', recommended: false },
    { id: 'gradio', name: 'Gradio', desc: '开源的搭建机器学习模型UI界面的Python库', url: 'https://gradio.app/', recommended: false },
    { id: 'replicate', name: 'Replicate', desc: '在线运行开源机器学习模型', url: 'https://replicate.com/', recommended: false },
  ],
}

// 生成工具颜色（根据工具名首字母）
export function getToolColor(name) {
  const colors = [
    'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500',
    'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500',
    'bg-teal-500', 'bg-cyan-500', 'bg-sky-500', 'bg-violet-500',
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

// 获取指定分类的所有工具（包括子分类）
export function getToolsByCategory(categoryId) {
  if (tools[categoryId]) {
    return tools[categoryId]
  }
  // 检查是否有子分类
  const category = categories.find(c => c.id === categoryId)
  if (category && category.children) {
    return category.children.flatMap(child => tools[child.id] || [])
  }
  return []
}

// 全局搜索
export function searchTools(query) {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const results = []
  for (const [catId, catTools] of Object.entries(tools)) {
    for (const tool of catTools) {
      if (tool.name.toLowerCase().includes(q) || tool.desc.toLowerCase().includes(q)) {
        results.push({ ...tool, categoryId: catId })
      }
    }
  }
  // 去重
  const seen = new Set()
  return results.filter(t => {
    if (seen.has(t.id)) return false
    seen.add(t.id)
    return true
  })
}
