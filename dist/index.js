"use strict";var p=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(x){throw (a=0, x)}};};var s=p(function(N,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(t,a,x,l,u,b,j,w,c,R,v,q){var i,g,h,I,e,y,n,o,f,r,m;if(t<=0||a<=0)return-1;if(i=E(x,0),g=E(j,0),l*=2,u*=2,b*=2,w*=2,c*=2,G([l,u])){for(e=a,y=t,m=y-1;m>=0;m--){for(n=b+m*l+(e-1)*u,f=c+(e-1)*w,r=e-1;r>=0&&!(i[n]!==g[f]||i[n+1]!==g[f+1]);r--)n-=u,f-=w;if(r===-1)return m}return-1}for(e=t,y=a,h=-l,I=e*l-u,o=q,r=0;r<e;r++)R[o]=1,o+=v;for(n=b+(e-1)*l+(y-1)*u,f=c+(y-1)*w,m=y-1;m>=0;m--){for(o=q+(e-1)*v,r=e-1;r>=0;r--)(i[n]!==g[f]||i[n+1]!==g[f+1])&&(R[o]=0),n+=h,o-=v;n+=I,f-=w}for(o=q+(e-1)*v,r=e-1;r>=0&&R[o]!==1;r--)o-=v;return r}F.exports=H
});var T=p(function(W,_){
var J=require('@stdlib/blas-base-layout-resolve-str/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),S=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=s();function U(t,a,x,l,u,b,j,w,c){var R,v,q,i;if(i=J(t),i===null)throw new TypeError(V('2edFx',t));if(K(i)?(q=x,R=u,v=1):(q=a,R=1,v=u),u<P(1,q))throw new RangeError(V('2edIR',q,u));return Q(a,x,l,R,v,0,b,j,S(x,j),w,c,S(a,c))}_.exports=U
});var B=p(function(X,z){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=T(),Z=s();Y(k,"ndarray",Z);z.exports=k
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),d=B(),O,C=L($(__dirname,"./native.js"));M(C)?O=d:O=C;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
