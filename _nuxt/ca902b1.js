(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,6],{271:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:" inline text-sm px-2 py-1 rounded-md hover:bg-gray-100 border border-transparent hover:border-gray-300 cursor-pointer"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);var n={props:{posts:{type:Array,required:!0}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-3"},t._l(t.posts,(function(e,i){return r("BaseCard",{key:i,staticClass:"bg-white"},[e.featured_image?r("div",{staticClass:"aspect-w-16 aspect-h-9"},[r("img",{staticClass:"object-cover",attrs:{src:e.featured_image,alt:e.featured_image_alt}})]):t._e(),t._v(" "),r("BaseCardContent",[r("div",{staticClass:"flex gap-2 mb-3"},[r("img",{staticClass:"w-8 h-8 object-cover rounded-full",attrs:{src:e.author.profile_image}}),t._v(" "),r("div",{staticClass:"text-xs"},[r("p",{staticClass:"font-semibold"},[t._v(t._s(e.author.first_name+" "+e.author.last_name))]),t._v(" "),r("p",[t._v(t._s(new Date(e.published).toDateString()))])])]),t._v(" "),r("div",{staticClass:"pl-10 space-y-1"},[r("nuxt-link",{attrs:{to:"/posts/"+e.slug}},[r("h1",{staticClass:"font-semibold cursor-pointer hover:text-primary"},[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"-ml-2"},t._l(e.tags,(function(e,i){return r("nuxt-link",{key:i,attrs:{to:"/posts/t/"+e.slug}},[r("BaseChip",[t._v(t._s("#"+e.name))])],1)})),1)],1)])],1)})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseChip:r(271).default,BaseCardContent:r(193).default,BaseCard:r(192).default})},287:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),{name:"IndexPage",layout:"home",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r({url:"https://api.buttercms.com/v2/posts",method:"GET",params:{auth_token:"3495bf047e0c94a76289d901a6de874a51c4deb3",page:1,exclude_body:!0}}).then((function(t){return t.data})).catch((function(t){return console.log(t)}));case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PostCard",{attrs:{posts:t.posts.data}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCard:r(272).default})}}]);