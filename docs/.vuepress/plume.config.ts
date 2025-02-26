import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMEZ76mh55DFETqT1_q02EN5SMEIrsAAhvBMRsz6vlV1XESC5m6xcIBAAMCAANtAAM2BA.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: '/' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3


    contributors: {
      mode: 'block',
    },

      
  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
footer: {
  message: `<div style="
    position: sticky;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #888;
    padding: 12px 16px;
    background: rgba(255,255,255,0.9);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    width: fit-content;
    margin: 20px auto;
    backdrop-filter: blur(4px);
    border: 1px solid #eee;">
    <span style="display: inline-flex; align-items: center; gap: 6px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      Powered by <a href="https://space.bilibili.com/517481506" target="_blank" class="zp-link">Ziphyrien</a>
    </span>
    <div class="separator" style="height: 16px; width: 1px; background: #ddd;"></div>
    <a href="https://qm.qq.com/cgi-bin/qm/qr?k=gb-kKM0eEGY4RZjOk9WJ_rXOFzgsiwqH" 
       target="_blank" 
       class="zp-link"
       style="display: inline-flex; align-items: center; gap: 5px;">
      <img src="//pub.idqqimg.com/wpa/images/group.png" 
           alt="QQ Group" 
           style="height: 20px; width: 20px; object-fit: contain;">
      <span>加入玩家社群</span>
    </a>
  </div>`,
}





  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://zip-image.pages.dev/file/AgACAgUAAyEGAASIL8CVAAMEZ76mh55DFETqT1_q02EN5SMEIrsAAhvBMRsz6vlV1XESC5m6xcIBAAMCAANtAAM2BA.png',
    name: 'ZephyrCraft Wiki',
    description: 'Minecraft ZephyrCraft Server&#x27;s Guide',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
