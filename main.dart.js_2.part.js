((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A={
DX(){var x=$.ua()
return new A.arT(x,x,x,x,x,x,x)},
arV:function arV(){},
arU:function arU(){},
arW:function arW(){},
arX:function arX(){},
arY:function arY(){},
arZ:function arZ(){},
as_:function as_(){},
arT:function arT(d,e,f,g,h,i,j){var _=this
_.ro$=d
_.avA$=e
_.avB$=f
_.avC$=g
_.avD$=h
_.avE$=i
_.avF$=j},
a4V:function a4V(){},
a4W:function a4W(){},
a4X:function a4X(){},
a4Y:function a4Y(){},
a4Z:function a4Z(){},
a5_:function a5_(){},
a50:function a50(){},
arK(d){var x,w,v,u,t=null,s=J.aJ(d),r=s.h(d,"id")
r=r==null?t:J.bH(r)
if(r==null)r=""
x=s.h(d,"name")
x=x==null?t:J.bH(x)
if(x==null)x=""
w=s.h(d,"address")
w=w==null?t:J.bH(w)
if(w==null)w=""
v=s.h(d,"contact_name")
v=v==null?t:J.bH(v)
if(v==null)v=""
u=s.h(d,"contact_phone")
u=u==null?t:J.bH(u)
if(u==null)u=""
return new A.dn(r,x,w,v,u,B.afw(s.h(d,"status")),B.aJb(s.h(d,"created_at")))},
dn:function dn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aa9:function aa9(){},
aaa:function aaa(){},
aa4:function aa4(){},
aa5:function aa5(){},
adk:function adk(){},
adl:function adl(){},
ah2:function ah2(){},
ah3:function ah3(){},
ahe:function ahe(){},
Qo:function Qo(){},
awm:function awm(){},
awn:function awn(){},
arN:function arN(){},
a4P:function a4P(){},
a4Q:function a4Q(){},
a4R:function a4R(){},
a4S:function a4S(){},
a4T:function a4T(){},
a4U:function a4U(){},
bbo(d){var x
$.aJA()
x=d.b
if(x>=200&&x<300)return!0
B.aWr(d)}}
J=c[1]
B=c[0]
A=a.updateHolder(c[17],A)
A.arV.prototype={}
A.arU.prototype={}
A.arW.prototype={}
A.arX.prototype={}
A.arY.prototype={}
A.arZ.prototype={}
A.as_.prototype={}
A.arT.prototype={}
A.a4V.prototype={}
A.a4W.prototype={}
A.a4X.prototype={}
A.a4Y.prototype={}
A.a4Z.prototype={}
A.a5_.prototype={}
A.a50.prototype={}
A.dn.prototype={
VT(d){var x=this
return new A.dn(x.a,x.b,x.c,x.d,x.e,d,x.r)}}
A.aa9.prototype={}
A.aaa.prototype={
z7(d,e){return this.akG(0,e)},
akG(d,e){var x=0,w=B.A(y.j),v,u,t
var $async$z7=B.B(function(f,g){if(f===1)return B.x(g,w)
for(;;)switch(x){case 0:u=A
t=B
x=3
return B.m(A.DX().ro$.fq(B.al(["name",e.b,"address",e.c,"contact_name",e.d,"contact_phone",e.e],y.w,y.b),"/schools/add"),$async$z7)
case 3:v=u.arK(t.iF(g))
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$z7,w)}}
A.aa4.prototype={}
A.aa5.prototype={
z8(d,e,f,g){return this.akH(d,e,f,g)},
akH(d,e,f,g){var x=0,w=B.A(y.n),v,u,t,s
var $async$z8=B.B(function(h,i){if(h===1)return B.x(i,w)
for(;;)switch(x){case 0:u=y.b
t=B
s=B
x=3
return B.m(A.DX().ro$.fq(B.al(["school_id",g,"name",e,"email",d,"password",f],u,u),"/schools/add-admin"),$async$z8)
case 3:v=t.Xr(s.iF(i))
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$z8,w)}}
A.adk.prototype={}
A.adl.prototype={
A1(d,e){return this.anG(0,e)},
anG(d,e){var x=0,w=B.A(y.e),v,u,t
var $async$A1=B.B(function(f,g){if(f===1)return B.x(g,w)
for(;;)switch(x){case 0:u=y.b
t=A
x=3
return B.m(A.DX().ro$.fq(B.al(["school_id",e],u,u),"/schools/delete"),$async$A1)
case 3:t.bbo(g)
v=!0
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$A1,w)}}
A.ah2.prototype={}
A.ah3.prototype={
ww(d,e){return this.a_z(0,e)},
a_z(d,e){var x=0,w=B.A(y.o),v,u,t,s,r,q,p,o,n,m
var $async$ww=B.B(function(f,g){if(f===1)return B.x(g,w)
for(;;)switch(x){case 0:r=y.w
q=y.b
o=y.d
n=J
m=B
x=3
return B.m(A.DX().ro$.jL(0,"/schools/get-all",B.al(["include_deleted",e],r,q)),$async$ww)
case 3:p=o.a(n.b3(m.iF(g),"schools"))
if(p==null)p=[]
u=B.b([],y.h)
for(t=J.aL(p),s=y.B;t.t();)u.push(A.arK(B.me(s.a(t.gN(t)),r,q)))
v=u
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$ww,w)}}
A.ahe.prototype={}
A.Qo.prototype={
t7(d){return this.a_B(d)},
a_B(d){var x=0,w=B.A(y.j),v,u,t,s,r,q,p
var $async$t7=B.B(function(e,f){if(e===1)return B.x(f,w)
for(;;)switch(x){case 0:u=y.w
t=y.b
p=B
x=3
return B.m(A.DX().ro$.jL(0,"/schools/get",B.al(["school_id",d],u,t)),$async$t7)
case 3:s=p.iF(f)
r=J.aJ(s)
q=y.B
v=A.arK(q.b(r.h(s,"school"))?B.me(q.a(r.h(s,"school")),u,t):s)
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$t7,w)}}
A.awm.prototype={}
A.awn.prototype={
Cr(d,e,f){return this.auO(0,e,f)},
auO(d,e,f){var x=0,w=B.A(y.j),v,u,t,s,r
var $async$Cr=B.B(function(g,h){if(g===1)return B.x(h,w)
for(;;)switch(x){case 0:u=A.DX()
t=y.b
t=B.p(t,t)
t.m(0,"school_id",f)
t.U(0,e)
s=A
r=B
x=3
return B.m(u.ro$.fq(t,"/schools/update"),$async$Cr)
case 3:v=s.arK(r.iF(h))
x=1
break
case 1:return B.y(v,w)}})
return B.z($async$Cr,w)}}
A.arN.prototype={}
A.a4P.prototype={}
A.a4Q.prototype={}
A.a4R.prototype={}
A.a4S.prototype={}
A.a4T.prototype={}
A.a4U.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.arV,A.arU,A.arW,A.arX,A.arY,A.arZ,A.as_,A.a4V,A.dn,A.aa9,A.aaa,A.aa4,A.aa5,A.adk,A.adl,A.ah2,A.ah3,A.ahe,A.Qo,A.awm,A.awn,A.a4P])
v(A.a4W,A.a4V)
v(A.a4X,A.a4W)
v(A.a4Y,A.a4X)
v(A.a4Z,A.a4Y)
v(A.a5_,A.a4Z)
v(A.a50,A.a5_)
v(A.arT,A.a50)
v(A.a4Q,A.a4P)
v(A.a4R,A.a4Q)
v(A.a4S,A.a4R)
v(A.a4T,A.a4S)
v(A.a4U,A.a4T)
v(A.arN,A.a4U)
x(A.a4V,A.arV)
x(A.a4W,A.as_)
x(A.a4X,A.arW)
x(A.a4Y,A.arY)
x(A.a4Z,A.arX)
x(A.a5_,A.arZ)
x(A.a50,A.arU)
x(A.a4P,A.ah2)
x(A.a4Q,A.ahe)
x(A.a4R,A.aa9)
x(A.a4S,A.awm)
x(A.a4T,A.adk)
x(A.a4U,A.aa4)})()
var y={h:B.T("u<dn>"),o:B.T("J<dn>"),B:B.T("aI<@,@>"),j:B.T("dn"),w:B.T("k"),n:B.T("l7"),e:B.T("v"),b:B.T("@"),d:B.T("J<@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bfk","ub",()=>new A.arN())})()};
(a=>{a["nUU+ONKQkQ9q+9Z0kyV/uvyAHY8="]=a.current})($__dart_deferred_initializers__);