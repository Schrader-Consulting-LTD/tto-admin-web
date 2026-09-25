((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
tq(){var x=$.jI()
return new A.atj(x,x,x,x,x,x,x,x,x,x,x)},
atl:function atl(){},
atk:function atk(){},
atm:function atm(){},
atn:function atn(){},
ato:function ato(){},
atq:function atq(){},
atp:function atp(){},
atr:function atr(){},
ats:function ats(){},
att:function att(){},
atu:function atu(){},
atj:function atj(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.nB$=d
_.awv$=e
_.aww$=f
_.awx$=g
_.awy$=h
_.awz$=i
_.awA$=j
_.awB$=k
_.awC$=l
_.awD$=m
_.awE$=n},
a5I:function a5I(){},
a5J:function a5J(){},
a5K:function a5K(){},
a5L:function a5L(){},
a5M:function a5M(){},
a5N:function a5N(){},
a5O:function a5O(){},
a5P:function a5P(){},
a5Q:function a5Q(){},
a5R:function a5R(){},
a5S:function a5S(){},
atc(d){var x,w,v,u,t=null,s=J.aH(d),r=s.h(d,"id")
r=r==null?t:J.bq(r)
if(r==null)r=""
x=s.h(d,"name")
x=x==null?t:J.bq(x)
if(x==null)x=""
w=s.h(d,"address")
w=w==null?t:J.bq(w)
if(w==null)w=""
v=s.h(d,"contact_name")
v=v==null?t:J.bq(v)
if(v==null)v=""
u=s.h(d,"contact_phone")
u=u==null?t:J.bq(u)
if(u==null)u=""
return new A.d6(r,x,w,v,u,B.agF(s.h(d,"status")),B.aal(s.h(d,"created_at")))},
d6:function d6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aUZ(d){var x,w,v=null,u=J.aH(d),t=y.f,s=t.b(u.h(d,"user"))?u.h(d,"user"):u.h(d,"teacher"),r=u.h(d,"password")
if(r==null)r=u.h(d,"temp_password")
r=r==null?v:J.bq(r)
if(r==null)r=""
x=u.h(d,"expires_at")
x=B.aal(x==null?u.h(d,"temp_password_expires_at"):x)
t=t.b(s)?B.Gl(B.j9(s,y.N,y.z)):new B.eX("",v,C.kK,"",v,v,v,C.dG,v)
w=B.aPv(u.h(d,"welcome_email_sent"))
u=B.aPv(u.h(d,"linked_existing"))
return new A.xo(r,x,t,w,u===!0)},
xo:function xo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ab8:function ab8(){},
ab9:function ab9(){},
ab3:function ab3(){},
ab4:function ab4(){},
aba:function aba(){},
abb:function abb(){},
aeu:function aeu(){},
aev:function aev(){},
ail:function ail(){},
aim:function aim(){},
aiy:function aiy(){},
R4:function R4(){},
aix:function aix(){},
Ca:function Ca(){},
axT:function axT(){},
axU:function axU(){},
atf:function atf(){},
a5A:function a5A(){},
a5B:function a5B(){},
a5C:function a5C(){},
a5D:function a5D(){},
a5E:function a5E(){},
a5F:function a5F(){},
a5G:function a5G(){},
a5H:function a5H(){}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[18],A)
A.atl.prototype={}
A.atk.prototype={}
A.atm.prototype={}
A.atn.prototype={}
A.ato.prototype={}
A.atq.prototype={}
A.atp.prototype={}
A.atr.prototype={}
A.ats.prototype={}
A.att.prototype={}
A.atu.prototype={}
A.atj.prototype={}
A.a5I.prototype={}
A.a5J.prototype={}
A.a5K.prototype={}
A.a5L.prototype={}
A.a5M.prototype={}
A.a5N.prototype={}
A.a5O.prototype={}
A.a5P.prototype={}
A.a5Q.prototype={}
A.a5R.prototype={}
A.a5S.prototype={}
A.d6.prototype={
Wu(d){var x=this
return new A.d6(x.a,x.b,x.c,x.d,x.e,d,x.r)}}
A.xo.prototype={}
A.ab8.prototype={}
A.ab9.prototype={
zv(d,e){return this.alx(0,e)},
alx(d,e){var x=0,w=B.u(y.R),v,u,t
var $async$zv=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=A
t=B
x=3
return B.l(A.tq().nB$.f1(B.ai(["name",e.b,"address",e.c,"contact_name",e.d,"contact_phone",e.e],y.N,y.z),"/schools/add"),$async$zv)
case 3:v=u.atc(t.fi(g))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$zv,w)}}
A.ab3.prototype={}
A.ab4.prototype={
zw(d,e,f){return this.aly(d,e,f)},
aly(d,e,f){var x=0,w=B.u(y.y),v,u,t,s
var $async$zw=B.v(function(g,h){if(g===1)return B.q(h,w)
for(;;)switch(x){case 0:u=y.z
t=A
s=B
x=3
return B.l(A.tq().nB$.f1(B.ai(["school_id",f,"name",e,"email",d],u,u),"/schools/add-admin"),$async$zw)
case 3:v=t.aUZ(s.fi(h))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$zw,w)}}
A.aba.prototype={}
A.abb.prototype={
wQ(d,e){return this.a0b(d,e)},
a0b(d,e){var x=0,w=B.u(y.y),v,u,t,s
var $async$wQ=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=y.z
t=A
s=B
x=3
return B.l(A.tq().nB$.f1(B.ai(["user_id",e,"school_id",d],u,u),"/schools/admin-temp-password"),$async$wQ)
case 3:v=t.aUZ(s.fi(g))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$wQ,w)}}
A.aeu.prototype={}
A.aev.prototype={
Aq(d,e){return this.aoz(0,e)},
aoz(d,e){var x=0,w=B.u(y.v),v,u,t
var $async$Aq=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=y.z
t=B
x=3
return B.l(A.tq().nB$.f1(B.ai(["school_id",e],u,u),"/schools/delete"),$async$Aq)
case 3:t.aXU(g)
v=!0
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$Aq,w)}}
A.ail.prototype={}
A.aim.prototype={
wR(d,e){return this.a0h(0,e)},
a0h(d,e){var x=0,w=B.u(y.o),v,u,t,s,r,q,p,o,n,m
var $async$wR=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:r=y.N
q=y.z
o=y.g
n=J
m=B
x=3
return B.l(A.tq().nB$.jk(0,"/schools/get-all",B.ai(["include_deleted",e],r,q)),$async$wR)
case 3:p=o.a(n.aT(m.fi(g),"schools"))
if(p==null)p=[]
u=B.b([],y.K)
for(t=J.aL(p),s=y.f;t.q();)u.push(A.atc(B.j9(s.a(t.gM(t)),r,q)))
v=u
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$wR,w)}}
A.aiy.prototype={}
A.R4.prototype={
tm(d){return this.a0j(d)},
a0j(d){var x=0,w=B.u(y.R),v,u,t,s,r,q,p
var $async$tm=B.v(function(e,f){if(e===1)return B.q(f,w)
for(;;)switch(x){case 0:u=y.N
t=y.z
p=B
x=3
return B.l(A.tq().nB$.jk(0,"/schools/get",B.ai(["school_id",d],u,t)),$async$tm)
case 3:s=p.fi(f)
r=J.aH(s)
q=y.f
v=A.atc(q.b(r.h(s,"school"))?B.j9(q.a(r.h(s,"school")),u,t):s)
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$tm,w)}}
A.aix.prototype={}
A.Ca.prototype={
q6(d){return this.a0f(d)},
a0f(d){var x=0,w=B.u(y.L),v,u,t,s,r,q,p,o,n,m
var $async$q6=B.v(function(e,f){if(e===1)return B.q(f,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
m=B
x=3
return B.l(A.tq().nB$.jk(0,"/schools/admins",B.ai(["school_id",d],s,r)),$async$q6)
case 3:q=m.fi(f)
p=J.aH(q)
o=y.j
n=o.b(p.h(q,"admins"))?o.a(p.h(q,"admins")):C.mV
p=B.b([],y.P)
for(o=J.aL(n),u=y.f;o.q();){t=o.gM(o)
if(u.b(t))p.push(B.Gl(B.j9(t,s,r)))}v=p
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$q6,w)}}
A.axT.prototype={}
A.axU.prototype={
CV(d,e,f){return this.avJ(0,e,f)},
avJ(d,e,f){var x=0,w=B.u(y.R),v,u,t,s,r
var $async$CV=B.v(function(g,h){if(g===1)return B.q(h,w)
for(;;)switch(x){case 0:u=A.tq()
t=y.z
t=B.p(t,t)
t.m(0,"school_id",f)
t.U(0,e)
s=A
r=B
x=3
return B.l(u.nB$.f1(t,"/schools/update"),$async$CV)
case 3:v=s.atc(r.fi(h))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$CV,w)}}
A.atf.prototype={}
A.a5A.prototype={}
A.a5B.prototype={}
A.a5C.prototype={}
A.a5D.prototype={}
A.a5E.prototype={}
A.a5F.prototype={}
A.a5G.prototype={}
A.a5H.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.atl,A.atk,A.atm,A.atn,A.ato,A.atq,A.atp,A.atr,A.ats,A.att,A.atu,A.a5I,A.d6,A.xo,A.ab8,A.ab9,A.ab3,A.ab4,A.aba,A.abb,A.aeu,A.aev,A.ail,A.aim,A.aiy,A.R4,A.aix,A.Ca,A.axT,A.axU,A.a5A])
v(A.a5J,A.a5I)
v(A.a5K,A.a5J)
v(A.a5L,A.a5K)
v(A.a5M,A.a5L)
v(A.a5N,A.a5M)
v(A.a5O,A.a5N)
v(A.a5P,A.a5O)
v(A.a5Q,A.a5P)
v(A.a5R,A.a5Q)
v(A.a5S,A.a5R)
v(A.atj,A.a5S)
v(A.a5B,A.a5A)
v(A.a5C,A.a5B)
v(A.a5D,A.a5C)
v(A.a5E,A.a5D)
v(A.a5F,A.a5E)
v(A.a5G,A.a5F)
v(A.a5H,A.a5G)
v(A.atf,A.a5H)
x(A.a5I,A.atl)
x(A.a5J,A.att)
x(A.a5K,A.atm)
x(A.a5L,A.atq)
x(A.a5M,A.ato)
x(A.a5N,A.atr)
x(A.a5O,A.atk)
x(A.a5P,A.atp)
x(A.a5Q,A.atn)
x(A.a5R,A.ats)
x(A.a5S,A.atu)
x(A.a5A,A.ail)
x(A.a5B,A.aiy)
x(A.a5C,A.ab8)
x(A.a5D,A.axT)
x(A.a5E,A.aeu)
x(A.a5F,A.ab3)
x(A.a5G,A.aix)
x(A.a5H,A.aba)})()
var y=(function rtii(){var x=B.T
return{K:x("w<d6>"),P:x("w<eX>"),o:x("I<d6>"),L:x("I<eX>"),j:x("I<@>"),f:x("aG<@,@>"),R:x("d6"),N:x("k"),y:x("xo"),v:x("A"),z:x("@"),g:x("I<@>?")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"biA","lR",()=>new A.atf())})()};
(a=>{a["Pi58gPLMxyoHXagee1nfNn+/1xI="]=a.current})($__dart_deferred_initializers__);