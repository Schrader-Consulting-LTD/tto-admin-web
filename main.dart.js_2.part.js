((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
tp(){var x=$.jH()
return new A.ath(x,x,x,x,x,x,x,x,x,x,x)},
atj:function atj(){},
ati:function ati(){},
atk:function atk(){},
atl:function atl(){},
atm:function atm(){},
ato:function ato(){},
atn:function atn(){},
atp:function atp(){},
atq:function atq(){},
atr:function atr(){},
ats:function ats(){},
ath:function ath(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.nB$=d
_.aws$=e
_.awt$=f
_.awu$=g
_.awv$=h
_.aww$=i
_.awx$=j
_.awy$=k
_.awz$=l
_.awA$=m
_.awB$=n},
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
at8(d){var x,w,v,u,t=null,s=J.aG(d),r=s.h(d,"id")
r=r==null?t:J.bw(r)
if(r==null)r=""
x=s.h(d,"name")
x=x==null?t:J.bw(x)
if(x==null)x=""
w=s.h(d,"address")
w=w==null?t:J.bw(w)
if(w==null)w=""
v=s.h(d,"contact_name")
v=v==null?t:J.bw(v)
if(v==null)v=""
u=s.h(d,"contact_phone")
u=u==null?t:J.bw(u)
if(u==null)u=""
return new A.d6(r,x,w,v,u,B.agC(s.h(d,"status")),B.aai(s.h(d,"created_at")))},
d6:function d6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aUY(d){var x,w=null,v=J.aG(d),u=y.f,t=u.b(v.h(d,"user"))?v.h(d,"user"):v.h(d,"teacher"),s=v.h(d,"password")
if(s==null)s=v.h(d,"temp_password")
s=s==null?w:J.bw(s)
if(s==null)s=""
x=v.h(d,"expires_at")
x=B.aai(x==null?v.h(d,"temp_password_expires_at"):x)
u=u.b(t)?B.Gj(B.k2(t,y.N,y.z)):new B.eX("",w,C.kK,"",w,w,w,C.dG,w)
return new A.xp(s,x,u,B.aYq(v.h(d,"welcome_email_sent")))},
xp:function xp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab6:function ab6(){},
ab7:function ab7(){},
ab1:function ab1(){},
ab2:function ab2(){},
ab8:function ab8(){},
ab9:function ab9(){},
aer:function aer(){},
aes:function aes(){},
aii:function aii(){},
aij:function aij(){},
aiv:function aiv(){},
R3:function R3(){},
aiu:function aiu(){},
C9:function C9(){},
axR:function axR(){},
axS:function axS(){},
atb:function atb(){},
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
A=a.updateHolder(c[20],A)
A.atj.prototype={}
A.ati.prototype={}
A.atk.prototype={}
A.atl.prototype={}
A.atm.prototype={}
A.ato.prototype={}
A.atn.prototype={}
A.atp.prototype={}
A.atq.prototype={}
A.atr.prototype={}
A.ats.prototype={}
A.ath.prototype={}
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
Wr(d){var x=this
return new A.d6(x.a,x.b,x.c,x.d,x.e,d,x.r)}}
A.xp.prototype={}
A.ab6.prototype={}
A.ab7.prototype={
zu(d,e){return this.alu(0,e)},
alu(d,e){var x=0,w=B.u(y.R),v,u,t
var $async$zu=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=A
t=B
x=3
return B.l(A.tp().nB$.f1(B.ai(["name",e.b,"address",e.c,"contact_name",e.d,"contact_phone",e.e],y.N,y.z),"/schools/add"),$async$zu)
case 3:v=u.at8(t.fj(g))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$zu,w)}}
A.ab1.prototype={}
A.ab2.prototype={
zv(d,e,f){return this.alv(d,e,f)},
alv(d,e,f){var x=0,w=B.u(y.y),v,u,t,s
var $async$zv=B.v(function(g,h){if(g===1)return B.q(h,w)
for(;;)switch(x){case 0:u=y.z
t=A
s=B
x=3
return B.l(A.tp().nB$.f1(B.ai(["school_id",f,"name",e,"email",d],u,u),"/schools/add-admin"),$async$zv)
case 3:v=t.aUY(s.fj(h))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$zv,w)}}
A.ab8.prototype={}
A.ab9.prototype={
wQ(d,e){return this.a09(d,e)},
a09(d,e){var x=0,w=B.u(y.y),v,u,t,s
var $async$wQ=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=y.z
t=A
s=B
x=3
return B.l(A.tp().nB$.f1(B.ai(["user_id",e,"school_id",d],u,u),"/schools/admin-temp-password"),$async$wQ)
case 3:v=t.aUY(s.fj(g))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$wQ,w)}}
A.aer.prototype={}
A.aes.prototype={
Ap(d,e){return this.aow(0,e)},
aow(d,e){var x=0,w=B.u(y.v),v,u,t
var $async$Ap=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:u=y.z
t=B
x=3
return B.l(A.tp().nB$.f1(B.ai(["school_id",e],u,u),"/schools/delete"),$async$Ap)
case 3:t.aXS(g)
v=!0
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$Ap,w)}}
A.aii.prototype={}
A.aij.prototype={
wR(d,e){return this.a0f(0,e)},
a0f(d,e){var x=0,w=B.u(y.o),v,u,t,s,r,q,p,o,n,m
var $async$wR=B.v(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:r=y.N
q=y.z
o=y.g
n=J
m=B
x=3
return B.l(A.tp().nB$.jj(0,"/schools/get-all",B.ai(["include_deleted",e],r,q)),$async$wR)
case 3:p=o.a(n.aT(m.fj(g),"schools"))
if(p==null)p=[]
u=B.b([],y.K)
for(t=J.aL(p),s=y.f;t.q();)u.push(A.at8(B.k2(s.a(t.gM(t)),r,q)))
v=u
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$wR,w)}}
A.aiv.prototype={}
A.R3.prototype={
tm(d){return this.a0h(d)},
a0h(d){var x=0,w=B.u(y.R),v,u,t,s,r,q,p
var $async$tm=B.v(function(e,f){if(e===1)return B.q(f,w)
for(;;)switch(x){case 0:u=y.N
t=y.z
p=B
x=3
return B.l(A.tp().nB$.jj(0,"/schools/get",B.ai(["school_id",d],u,t)),$async$tm)
case 3:s=p.fj(f)
r=J.aG(s)
q=y.f
v=A.at8(q.b(r.h(s,"school"))?B.k2(q.a(r.h(s,"school")),u,t):s)
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$tm,w)}}
A.aiu.prototype={}
A.C9.prototype={
q6(d){return this.a0d(d)},
a0d(d){var x=0,w=B.u(y.L),v,u,t,s,r,q,p,o,n,m
var $async$q6=B.v(function(e,f){if(e===1)return B.q(f,w)
for(;;)switch(x){case 0:s=y.N
r=y.z
m=B
x=3
return B.l(A.tp().nB$.jj(0,"/schools/admins",B.ai(["school_id",d],s,r)),$async$q6)
case 3:q=m.fj(f)
p=J.aG(q)
o=y.j
n=o.b(p.h(q,"admins"))?o.a(p.h(q,"admins")):C.mV
p=B.b([],y.P)
for(o=J.aL(n),u=y.f;o.q();){t=o.gM(o)
if(u.b(t))p.push(B.Gj(B.k2(t,s,r)))}v=p
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$q6,w)}}
A.axR.prototype={}
A.axS.prototype={
CU(d,e,f){return this.avG(0,e,f)},
avG(d,e,f){var x=0,w=B.u(y.R),v,u,t,s,r
var $async$CU=B.v(function(g,h){if(g===1)return B.q(h,w)
for(;;)switch(x){case 0:u=A.tp()
t=y.z
t=B.p(t,t)
t.m(0,"school_id",f)
t.U(0,e)
s=A
r=B
x=3
return B.l(u.nB$.f1(t,"/schools/update"),$async$CU)
case 3:v=s.at8(r.fj(h))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$CU,w)}}
A.atb.prototype={}
A.a5A.prototype={}
A.a5B.prototype={}
A.a5C.prototype={}
A.a5D.prototype={}
A.a5E.prototype={}
A.a5F.prototype={}
A.a5G.prototype={}
A.a5H.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.atj,A.ati,A.atk,A.atl,A.atm,A.ato,A.atn,A.atp,A.atq,A.atr,A.ats,A.a5I,A.d6,A.xp,A.ab6,A.ab7,A.ab1,A.ab2,A.ab8,A.ab9,A.aer,A.aes,A.aii,A.aij,A.aiv,A.R3,A.aiu,A.C9,A.axR,A.axS,A.a5A])
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
v(A.ath,A.a5S)
v(A.a5B,A.a5A)
v(A.a5C,A.a5B)
v(A.a5D,A.a5C)
v(A.a5E,A.a5D)
v(A.a5F,A.a5E)
v(A.a5G,A.a5F)
v(A.a5H,A.a5G)
v(A.atb,A.a5H)
x(A.a5I,A.atj)
x(A.a5J,A.atr)
x(A.a5K,A.atk)
x(A.a5L,A.ato)
x(A.a5M,A.atm)
x(A.a5N,A.atp)
x(A.a5O,A.ati)
x(A.a5P,A.atn)
x(A.a5Q,A.atl)
x(A.a5R,A.atq)
x(A.a5S,A.ats)
x(A.a5A,A.aii)
x(A.a5B,A.aiv)
x(A.a5C,A.ab6)
x(A.a5D,A.axR)
x(A.a5E,A.aer)
x(A.a5F,A.ab1)
x(A.a5G,A.aiu)
x(A.a5H,A.ab8)})()
var y=(function rtii(){var x=B.T
return{K:x("w<d6>"),P:x("w<eX>"),o:x("I<d6>"),L:x("I<eX>"),j:x("I<@>"),f:x("aJ<@,@>"),R:x("d6"),N:x("k"),y:x("xp"),v:x("A"),z:x("@"),g:x("I<@>?")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"biy","lR",()=>new A.atb())})()};
(a=>{a["GmBo8X5htZjgIdVg6NDiAg6FVjE="]=a.current})($__dart_deferred_initializers__);