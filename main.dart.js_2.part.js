((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
nj(){var x=$.jW()
return new A.avR(x,x,x,x,x,x,x,x,x,x,x,x,x)},
avT:function avT(){},
avS:function avS(){},
avU:function avU(){},
avV:function avV(){},
avW:function avW(){},
avX:function avX(){},
avZ:function avZ(){},
avY:function avY(){},
aw_:function aw_(){},
aw0:function aw0(){},
aw2:function aw2(){},
aw1:function aw1(){},
aw3:function aw3(){},
avR:function avR(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.lc$=d
_.ayC$=e
_.ayD$=f
_.ayE$=g
_.ayF$=h
_.ayG$=i
_.ayH$=j
_.ayI$=k
_.ayJ$=l
_.ayK$=m
_.ayL$=n
_.ayM$=o
_.ayN$=p},
a7e:function a7e(){},
a7f:function a7f(){},
a7g:function a7g(){},
a7h:function a7h(){},
a7i:function a7i(){},
a7j:function a7j(){},
a7k:function a7k(){},
a7l:function a7l(){},
a7m:function a7m(){},
a7n:function a7n(){},
a7o:function a7o(){},
a7p:function a7p(){},
a7q:function a7q(){},
avK(d){var x,w,v,u,t=null,s=J.aE(d),r=s.h(d,"id")
r=r==null?t:J.bl(r)
if(r==null)r=""
x=s.h(d,"name")
x=x==null?t:J.bl(x)
if(x==null)x=""
w=s.h(d,"address")
w=w==null?t:J.bl(w)
if(w==null)w=""
v=s.h(d,"contact_name")
v=v==null?t:J.bl(v)
if(v==null)v=""
u=s.h(d,"contact_phone")
u=u==null?t:J.bl(u)
if(u==null)u=""
return new A.da(r,x,w,v,u,B.aiJ(s.h(d,"status")),B.MF(s.h(d,"created_at")),B.MF(s.h(d,"setup_completed_at")))},
da:function da(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aYd(d){var x,w,v=null,u=J.aE(d),t=y.f,s=t.b(u.h(d,"user"))?u.h(d,"user"):u.h(d,"teacher"),r=u.h(d,"password")
if(r==null)r=u.h(d,"temp_password")
r=r==null?v:J.bl(r)
if(r==null)r=""
x=u.h(d,"expires_at")
x=B.MF(x==null?u.h(d,"temp_password_expires_at"):x)
t=t.b(s)?B.yp(B.iE(s,y.N,y.z)):new B.dE("",v,C.kV,"",v,v,v,C.dR,v)
w=B.aO7(u.h(d,"welcome_email_sent"))
u=B.aO7(u.h(d,"linked_existing"))
return new A.y1(r,x,t,w,u===!0)},
y1:function y1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
acP:function acP(){},
acQ:function acQ(){},
acK:function acK(){},
acL:function acL(){},
acR:function acR(){},
acS:function acS(){},
agy:function agy(){},
agz:function agz(){},
aks:function aks(){},
akt:function akt(){},
akF:function akF(){},
Sc:function Sc(){},
akE:function akE(){},
wp:function wp(){},
atk:function atk(){},
atl:function atl(){},
aAB:function aAB(){},
aAC:function aAC(){},
aAz:function aAz(){},
aAA:function aAA(){},
avN:function avN(){},
a74:function a74(){},
a75:function a75(){},
a76:function a76(){},
a77:function a77(){},
a78:function a78(){},
a79:function a79(){},
a7a:function a7a(){},
a7b:function a7b(){},
a7c:function a7c(){},
a7d:function a7d(){}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[21],A)
A.avT.prototype={}
A.avS.prototype={}
A.avU.prototype={}
A.avV.prototype={}
A.avW.prototype={}
A.avX.prototype={}
A.avZ.prototype={}
A.avY.prototype={}
A.aw_.prototype={}
A.aw0.prototype={}
A.aw2.prototype={}
A.aw1.prototype={}
A.aw3.prototype={}
A.avR.prototype={}
A.a7e.prototype={}
A.a7f.prototype={}
A.a7g.prototype={}
A.a7h.prototype={}
A.a7i.prototype={}
A.a7j.prototype={}
A.a7k.prototype={}
A.a7l.prototype={}
A.a7m.prototype={}
A.a7n.prototype={}
A.a7o.prototype={}
A.a7p.prototype={}
A.a7q.prototype={}
A.da.prototype={
Xx(d){var x=this
return new A.da(x.a,x.b,x.c,x.d,x.e,d,x.r,x.w)}}
A.y1.prototype={}
A.acP.prototype={}
A.acQ.prototype={
A1(d,e){return this.ank(0,e)},
ank(d,e){var x=0,w=B.r(y.R),v,u,t
var $async$A1=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=A
t=B
x=3
return B.k(A.nj().lc$.eM(B.al(["name",e.b,"address",e.c,"contact_name",e.d,"contact_phone",e.e],y.N,y.z),"/schools/add"),$async$A1)
case 3:v=u.avK(t.eJ(g))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$A1,w)}}
A.acK.prototype={}
A.acL.prototype={
A3(d,e,f){return this.anl(d,e,f)},
anl(d,e,f){var x=0,w=B.r(y.y),v,u,t,s,r
var $async$A3=B.t(function(g,h){if(g===1)return B.o(h,w)
for(;;)switch(x){case 0:u=A.nj()
t=y.z
t=B.v(t,t)
t.m(0,"school_id",f)
t.m(0,"name",e)
t.m(0,"email",d)
s=A
r=B
x=3
return B.k(u.lc$.eM(t,"/schools/add-admin"),$async$A3)
case 3:v=s.aYd(r.eJ(h))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$A3,w)}}
A.acR.prototype={}
A.acS.prototype={
xk(d,e){return this.a1p(d,e)},
a1p(d,e){var x=0,w=B.r(y.y),v,u,t,s,r
var $async$xk=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=A.nj()
t=y.z
t=B.v(t,t)
t.m(0,"user_id",e)
t.m(0,"school_id",d)
s=A
r=B
x=3
return B.k(u.lc$.eM(t,"/schools/admin-temp-password"),$async$xk)
case 3:v=s.aYd(r.eJ(g))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$xk,w)}}
A.agy.prototype={}
A.agz.prototype={
B1(d,e){return this.aqp(0,e)},
aqp(d,e){var x=0,w=B.r(y.v),v,u,t
var $async$B1=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=y.z
t=B
x=3
return B.k(A.nj().lc$.eM(B.al(["school_id",e],u,u),"/schools/delete"),$async$B1)
case 3:t.b0e(g)
v=!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$B1,w)}}
A.aks.prototype={}
A.akt.prototype={
xl(d,e){return this.a1v(0,e)},
a1v(d,e){var x=0,w=B.r(y.o),v,u,t,s,r,q,p,o,n,m
var $async$xl=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:r=y.N
q=y.z
o=y.g
n=J
m=B
x=3
return B.k(A.nj().lc$.js(0,"/schools/get-all",B.al(["include_deleted",e],r,q)),$async$xl)
case 3:p=o.a(n.aT(m.eJ(g),"schools"))
if(p==null)p=[]
u=B.b([],y.K)
for(t=J.aM(p),s=y.f;t.q();)u.push(A.avK(B.iE(s.a(t.gN(t)),r,q)))
v=u
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$xl,w)}}
A.akF.prototype={}
A.Sc.prototype={
tE(d){return this.a1y(d)},
a1y(d){var x=0,w=B.r(y.R),v,u,t,s,r,q,p
var $async$tE=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:u=y.N
t=y.z
p=B
x=3
return B.k(A.nj().lc$.js(0,"/schools/get",B.al(["school_id",d],u,t)),$async$tE)
case 3:s=p.eJ(f)
r=J.aE(s)
q=y.f
v=A.avK(q.b(r.h(s,"school"))?B.iE(q.a(r.h(s,"school")),u,t):s)
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$tE,w)}}
A.akE.prototype={}
A.wp.prototype={
oh(d){return this.a1t(d)},
a1t(d){var x=0,w=B.r(y.L),v,u,t,s,r,q,p,o,n,m
var $async$oh=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:q=A.nj()
p=y.N
o=y.z
n=B.v(p,o)
n.m(0,"school_id",d)
m=B
x=3
return B.k(q.lc$.js(0,"/schools/admins",n),$async$oh)
case 3:u=m.eJ(f)
q=J.aE(u)
n=y.j
t=n.b(q.h(u,"admins"))?n.a(q.h(u,"admins")):C.n4
q=B.b([],y.P)
for(n=J.aM(t),s=y.f;n.q();){r=n.gN(n)
if(s.b(r))q.push(B.yp(B.iE(r,p,o)))}v=q
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$oh,w)}}
A.atk.prototype={}
A.atl.prototype={
Df(d,e){return this.awU(d,e)},
awU(d,e){var x=0,w=B.r(y.v),v,u,t,s,r,q
var $async$Df=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=A.nj()
t=y.z
t=B.v(t,t)
t.m(0,"user_id",e)
t.m(0,"school_id",d)
s=B
r=J
q=B
x=3
return B.k(u.lc$.eM(t,"/schools/remove-admin"),$async$Df)
case 3:u=s.aO7(r.aT(q.eJ(g),"account_deleted"))
v=u===!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$Df,w)}}
A.aAB.prototype={}
A.aAC.prototype={
DB(d,e,f){return this.axP(0,e,f)},
axP(d,e,f){var x=0,w=B.r(y.R),v,u,t,s,r
var $async$DB=B.t(function(g,h){if(g===1)return B.o(h,w)
for(;;)switch(x){case 0:u=A.nj()
t=y.z
t=B.v(t,t)
t.m(0,"school_id",f)
t.T(0,e)
s=A
r=B
x=3
return B.k(u.lc$.eM(t,"/schools/update"),$async$DB)
case 3:v=s.avK(r.eJ(h))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$DB,w)}}
A.aAz.prototype={}
A.aAA.prototype={
DC(d,e,f,g){return this.axQ(d,e,f,g)},
axQ(d,e,f,g){var x=0,w=B.r(y.S),v,u,t,s,r,q,p,o,n
var $async$DC=B.t(function(h,i){if(h===1)return B.o(i,w)
for(;;)switch(x){case 0:u=A.nj()
t=y.z
s=B.v(t,t)
s.m(0,"user_id",g)
s.m(0,"school_id",f)
s.m(0,"name",e)
s.m(0,"email",d)
r=B
q=B
p=y.f
o=J
n=B
x=3
return B.k(u.lc$.eM(s,"/schools/update-admin"),$async$DC)
case 3:v=r.yp(q.iE(p.a(o.aT(n.eJ(i),"user")),y.N,t))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$DC,w)}}
A.avN.prototype={}
A.a74.prototype={}
A.a75.prototype={}
A.a76.prototype={}
A.a77.prototype={}
A.a78.prototype={}
A.a79.prototype={}
A.a7a.prototype={}
A.a7b.prototype={}
A.a7c.prototype={}
A.a7d.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.A,[A.avT,A.avS,A.avU,A.avV,A.avW,A.avX,A.avZ,A.avY,A.aw_,A.aw0,A.aw2,A.aw1,A.aw3,A.a7e,A.da,A.y1,A.acP,A.acQ,A.acK,A.acL,A.acR,A.acS,A.agy,A.agz,A.aks,A.akt,A.akF,A.Sc,A.akE,A.wp,A.atk,A.atl,A.aAB,A.aAC,A.aAz,A.aAA,A.a74])
v(A.a7f,A.a7e)
v(A.a7g,A.a7f)
v(A.a7h,A.a7g)
v(A.a7i,A.a7h)
v(A.a7j,A.a7i)
v(A.a7k,A.a7j)
v(A.a7l,A.a7k)
v(A.a7m,A.a7l)
v(A.a7n,A.a7m)
v(A.a7o,A.a7n)
v(A.a7p,A.a7o)
v(A.a7q,A.a7p)
v(A.avR,A.a7q)
v(A.a75,A.a74)
v(A.a76,A.a75)
v(A.a77,A.a76)
v(A.a78,A.a77)
v(A.a79,A.a78)
v(A.a7a,A.a79)
v(A.a7b,A.a7a)
v(A.a7c,A.a7b)
v(A.a7d,A.a7c)
v(A.avN,A.a7d)
x(A.a7e,A.avT)
x(A.a7f,A.aw2)
x(A.a7g,A.avV)
x(A.a7h,A.avZ)
x(A.a7i,A.avX)
x(A.a7j,A.aw_)
x(A.a7k,A.avS)
x(A.a7l,A.avY)
x(A.a7m,A.avW)
x(A.a7n,A.aw1)
x(A.a7o,A.aw0)
x(A.a7p,A.aw3)
x(A.a7q,A.avU)
x(A.a74,A.aks)
x(A.a75,A.akF)
x(A.a76,A.acP)
x(A.a77,A.aAB)
x(A.a78,A.agy)
x(A.a79,A.acK)
x(A.a7a,A.akE)
x(A.a7b,A.acR)
x(A.a7c,A.aAz)
x(A.a7d,A.atk)})()
var y=(function rtii(){var x=B.T
return{K:x("w<da>"),P:x("w<dE>"),o:x("I<da>"),L:x("I<dE>"),j:x("I<@>"),f:x("aD<@,@>"),R:x("da"),N:x("l"),y:x("y1"),S:x("dE"),v:x("z"),z:x("@"),g:x("I<@>?")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bmj","j_",()=>new A.avN())})()};
(a=>{a["bx4E/gk57M9jF0GBsxgk3+A72QY="]=a.current})($__dart_deferred_initializers__);