(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dae70ae0"],{"0cbc":function(t,e,i){"use strict";i("3661")},3661:function(t,e,i){},"3a5e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[i("div",[i("i"),i("i"),i("i")])])}],s=(i("0cbc"),i("2877")),c={},o=Object(s["a"])(c,n,a,!1,null,"81442b60",null);e["a"]=o.exports},"40a1":function(t,e,i){},5272:function(t,e,i){"use strict";i("40a1")},"61d6":function(t,e,i){"use strict";i("91a2")},7006:function(t,e,i){"use strict";i("aee3")},"91a2":function(t,e,i){},aee3:function(t,e,i){},cb03:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mv"},[i("div",{staticClass:"banner"},[i("Banner")],1),i("div",{staticClass:"mvlist"},t._l(t.MvList,(function(t,e){return i("Mvitem",{key:e,attrs:{item:t}})})),1),t.showLoading?i("Loading"):t._e(),i("div",{staticClass:"loadingmore"},[t._v(t._s(t.momore?"没有更多了":"正在加载..."))])],1)])},a=[],s=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("transition-group",{attrs:{tag:"ul","enter-active-class":"animate__animated animate__flipInX","leave-active-class":"animate__animated animate__flipOutX"}},t._l(t.picurl,(function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:n==t.curIndex,expression:"index==curIndex"}],key:n,on:{transitionend:t.end,mousemove:t.move,mouseout:t.out}},[i("img",{attrs:{src:e,alt:""}})])})),0),i("ol",t._l(t.picurl.length,(function(e,n){return i("li",{key:n,class:n==t.curIndex?"active":"",on:{click:function(e){return t.clickDot(n)}}})})),0)],1)}),c=[],o={data:function(){return{picurl:[["http://p1.music.126.net/rSzcSzMpiD_A65Cc6bMq7w==/109951165823303749.jpg?imageView&quality=89"],["http://p1.music.126.net/ah9CWGlffEO91ELyrKoftw==/109951165824581619.jpg?imageView&quality=89"],["http://p1.music.126.net/Tx_necPnFBCuKMrosHJXTw==/109951165824294690.jpg?imageView&quality=89"],["http://p1.music.126.net/hZpzFhr8yZF8IrR0illZdA==/109951165823325049.jpg?imageView&quality=89"],["http://p1.music.126.net/3cm3JLy7DUnl-YtySirC1g==/109951165670392962.jpg?imageView&quality=89"]],curIndex:0,timer:null,flag:!0}},methods:{clickDot:function(t){this.move(),this.curIndex=t,this.end()},move:function(){clearInterval(this.timer)},end:function(){this.flag&&(this.flag=!1,this.timer=setInterval(function(){this.curIndex++,this.curIndex>this.picurl.length-1&&(this.curIndex=0),this.flag=!0}.bind(this),2500))},out:function(){this.end()}},mounted:function(){this.end()}},r=o,l=(i("61d6"),i("2877")),u=Object(l["a"])(r,s,c,!1,null,"373d05e1",null),m=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"item",attrs:{tag:"li",to:"/mv/"+t.item.id}},[i("div",[i("img",{attrs:{src:t.item.cover+"?imageView=1&type=webp&thumbnail=369x0"}}),i("span",{staticClass:"iconfont icon-MV1"},[i("i",[t._v(t._s(t.item.playCount))])])]),i("span",{staticClass:"iconfont icon-weibiaoti--1"}),i("p",[t._v(t._s(t.item.name))]),i("p",[t._v(t._s(t.item.artists[0].name))])])},h=[],f={data:function(){return{}},name:"ListItem",props:["item"]},p=f,v=(i("5272"),Object(l["a"])(p,d,h,!1,null,"606c153a",null)),g=v.exports,_=i("3a5e"),w={name:"moveradio",data:function(){return{MvList:[],showLoading:!0,page:1,momore:!1}},components:{Banner:m,Mvitem:g,Loading:_["a"]},created:function(){this.loadSearch(),window.addEventListener("scroll",this.handleScroll)},methods:{loadSearch:function(){var t=this,e=30*(this.page-1);this.$axios.get("/mv/all?type=1&offset="+e).then((function(e){t.MvList=t.MvList.concat(e.data.data),t.showLoading=!0}))},handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;if(t+document.documentElement.clientHeight==document.documentElement.scrollHeight){if(this.page++,this.page>6)return this.momore=!0,this.showLoading=!1,!1;this.loadSearch(),this.showLoading=!0}},destoryed:function(){window.removeEventListener("scroll",this.handleScroll,!1)}}},b=w,x=(i("7006"),Object(l["a"])(b,n,a,!1,null,"4bbb1d06",null));e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-dae70ae0.ffd02e34.js.map