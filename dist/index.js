"use strict";var j=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var p=j(function(W,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(i,a,c,t,u,s,g,m,w,x,v,q){var y,b,h,I,e,R,n,o,f,r,l;if(i<=0||a<=0)return-1;if(y=E(c,0),b=E(g,0),t*=2,u*=2,s*=2,m*=2,w*=2,G([t,u])){for(e=a,R=i,l=R-1;l>=0;l--){for(n=s+l*t+(e-1)*u,f=w+(e-1)*m,r=e-1;r>=0&&!(y[n]!==b[f]||y[n+1]!==b[f+1]);r--)n-=u,f-=m;if(r===-1)return l}return-1}for(e=i,R=a,h=-t,I=e*t-u,o=q,r=0;r<e;r++)x[o]=1,o+=v;for(n=s+(e-1)*t+(R-1)*u,f=w+(R-1)*m,l=R-1;l>=0;l--){for(o=q+(e-1)*v,r=e-1;r>=0;r--)(y[n]!==b[f]||y[n+1]!==b[f+1])&&(x[o]=0),n+=h,o-=v;n+=I,f-=m}for(o=q+(e-1)*v,r=e-1;r>=0&&x[o]!==1;r--)o-=v;return r}F.exports=H
});var C=j(function(X,_){
var J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/strided-base-stride2offset/dist'),Q=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),U=p();function Y(i,a,c,t,u,s,g,m,w){var x,v,q;if(!J(i))throw new TypeError(V('nullFx',i));if(K(i)?q=c:q=a,u<Q(1,q))throw new RangeError(V('nullIR',q,u));return P(i)?(x=1,v=u):(x=u,v=1),U(a,c,t,x,v,0,s,g,S(c,g),m,w,S(a,w))}_.exports=Y
});var z=j(function(A,k){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=C(),$=p();Z(T,"ndarray",$);k.exports=T
});var M=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),N=z(),O,B=L(M(__dirname,"./native.js"));D(B)?O=N:O=B;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
