import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
base=Image.open('p03.jpg').convert('RGB'); W,H=base.size
bp=base.load()
canvas=Image.new('RGB',(W,H))
cp=canvas.load()
col=[bp[25,y] for y in range(H)]
for y in range(H):
    for x in range(W): cp[x,y]=col[y]
d=ImageDraw.Draw(canvas)
NAVY=(22,36,74)
# title
lines=["Con Zentia, piernas","paralelas y cadera recta"]
size=150
while True:
    f=ImageFont.truetype('mont800.ttf',size)
    if max(d.textlength(l,font=f) for l in lines)<=1660: break
    size-=4
y=150
for l in lines:
    w=d.textlength(l,font=f); d.text(((W-w)/2,y),l,font=f,fill=NAVY); y+=int(size*1.18)
# photo
X0,X1,Y0,Y1=133,1867,560,1600
pw,ph=X1-X0,Y1-Y0
src=Image.open('p02.jpg').convert('RGB')
sw=src.size[0]; sh=int(sw*ph/pw)
oy=int(sys.argv[1]) if len(sys.argv)>1 else 330
photo=src.crop((0,oy,sw,oy+sh)).resize((pw,ph),Image.LANCZOS)
mask=Image.new('L',(pw,ph),0); ImageDraw.Draw(mask).rounded_rectangle((0,0,pw-1,ph-1),radius=26,fill=255)
sh_=Image.new('RGBA',(W,H),(0,0,0,0)); ImageDraw.Draw(sh_).rounded_rectangle((X0,Y0+12,X1,Y1+12),radius=26,fill=(22,36,74,60))
sh_=sh_.filter(ImageFilter.GaussianBlur(22))
canvas=Image.alpha_composite(canvas.convert('RGBA'),sh_).convert('RGB')
canvas.paste(photo,(X0,Y0),mask)
d=ImageDraw.Draw(canvas)
# badges
items=["Rodillas separadas","Cadera alineada","Se queda en su sitio"]
fb=ImageFont.truetype('mont700.ttf',50)
gap=26; padx=34; ic=56
widths=[padx*2+ic+18+d.textlength(t,font=fb) for t in items]
tot=sum(widths)+gap*2
if tot>W-2*X0:
    fb=ImageFont.truetype('mont700.ttf',44); widths=[padx*2+ic+16+d.textlength(t,font=fb) for t in items]; tot=sum(widths)+gap*2
x=(W-tot)/2; by=1680; bh=118
for t,wd in zip(items,widths):
    sh2=Image.new('RGBA',(W,H),(0,0,0,0)); ImageDraw.Draw(sh2).rounded_rectangle((x,by+8,x+wd,by+bh+8),radius=bh//2,fill=(22,36,74,45)); sh2=sh2.filter(ImageFilter.GaussianBlur(14))
    canvas=Image.alpha_composite(canvas.convert('RGBA'),sh2).convert('RGB'); d=ImageDraw.Draw(canvas)
    d.rounded_rectangle((x,by,x+wd,by+bh),radius=bh//2,fill=(255,255,255))
    cx=x+padx+ic/2; cy=by+bh/2
    d.ellipse((cx-ic/2,cy-ic/2,cx+ic/2,cy+ic/2),fill=NAVY)
    d.line([(cx-13,cy+1),(cx-3,cy+11),(cx+15,cy-10)],fill=(255,255,255),width=8,joint='curve')
    tb=d.textbbox((0,0),t,font=fb)
    d.text((x+padx+ic+18,cy-(tb[3]+tb[1])/2),t,font=fb,fill=NAVY)
    x+=wd+gap
canvas.save('zentia-04-solucion.jpg',quality=93)
canvas.resize((700,700)).save('prev04.jpg')
