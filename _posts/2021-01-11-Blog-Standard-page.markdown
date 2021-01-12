---
layout: post
title:  "Blog-Standard-page"
title-tc: "部落格文章測試頁面"
date:   2021-01-11
categories: other
excerpt: 這裡是一篇文章簡單測試這個部落格的功能、紀錄製作上遇到的問題和如何解決。緣起是要做一個網頁設計的專案……
image: '/assets/imgs/page/universal/placeholder/placeholder2.jpg'
tags: jekyll test
---




{% capture introImg %}{{ page.image }}{% endcapture %}
{% include image-figure.html url= introImg description="Cats" bleed="none" figcaption="none" %}

## 起源
這裡是一篇文章簡單測試這個部落格的功能、紀錄製作上遇到的問題和如何解決。緣起是要做一個網頁設計的專案，恰好[三角東東]({{base}}/about)------同樣是學校內課程的課程正在做中科大改造計畫。考量投入進去的心血如果單作為一個課堂作業真的是太可惜，所以就用[Jekyll](https://jekyllrb.com/)這款靜態網站生產器去製作一個模組規格化的網站，把邏輯、參數都寫好又有什麼活動、團隊、個人部落格三兩下就能拉出來重建啦~

當然羅馬不是一兩天造成的
{% include image-figure.html url= img1 description="Cats" bleed="none" figcaption="none" %}

## 開發環境
-   Jekyll
-   <del>[Hyde Theme](https://github.com/poole/hyde)</del> 參考，後來換成全手刻了


## 一些參考過的東西
-   [3 Simple steps to setup Jekyll Categories and Tags](https://blog.webjeda.com/jekyll-categories/)
-   [Image caption in Jekyll](https://medium.com/@vilcins/image-caption-in-jekyll-5853b8e61b9d)
-   [How to use a variable included in a layout in posts using that layout?](https://stackoverflow.com/questions/37756964/how-to-use-a-variable-included-in-a-layout-in-posts-using-that-layout)
-   [Jekyll 中的配置和模板语法](https://gist.github.com/biezhi/f88be58ef4ae0f3741bb36ab8daa53c5)
-   [Jekyll cheatsheet](https://devhints.io/jekyll)
-   [Jekyll, the website framework that is super fast and super simple.](https://jekyllcodex.org/)
-   [Jekyll Tags on Github Pages](https://longqian.me/2017/02/09/github-jekyll-tag/)
-   [Jekyll Variables and Liquid template tags cheatsheet](https://simpleit.rocks/ruby/jekyll/templates/jekyll-variables-and-liquid-template-tags-cheatsheet/#paginator)
-   [Jekyll Tip: Adding Styling To Html Output](https://digitaldrummerj.me/styling-jekyll-markdown/)
-   [Making Jekyll related posts really related!](https://blog.webjeda.com/jekyll-related-posts/)
-   [Relative paths in Jekyll](https://ricostacruz.com/til/relative-paths-in-jekyll)
-   [Setting Per-Page Custom CSS in Jekyll](https://jreel.github.io/per-page-custom-css-in-jekyll/)
-   [Why Your Blog URL Structure Matters](https://www.tgroupmethod.com/blog/blog-url-structure/)
