# Números de la oferta del cojín (ELORIA, precios sin promo, IVA incluido)
fee=lambda p:p*0.019+0.25
def m(precio,coste,dev=0.08):
    neto=precio/1.21; costesin=coste/1.21  # autónomo deduce IVA de compra con factura
    return neto-costesin-fee(precio)-dev*costesin-0  # reserva devoluciones = 8% del coste
tiers={'Para 1 · 39,90':(39.90,15.40),'Para 2 (pareja) · 64,90':(64.90,25.20),'Para 3 (familia/regalo) · 84,90':(84.90,40.60)}
mix={'Para 1 · 39,90':0.25,'Para 2 (pareja) · 64,90':0.60,'Para 3 (familia/regalo) · 84,90':0.15}
aov=sum(tiers[k][0]*w for k,w in mix.items()); mg=sum(m(*tiers[k])*w for k,w in mix.items())
for k,v in tiers.items(): print(f'{k}: margen {m(*v):.2f} €  ROAS mín {v[0]/m(*v):.2f}')
print(f'Ticket medio {aov:.2f} € · margen medio {mg:.2f} € · ROAS mín {aov/mg:.2f}')
for cpv in (0.6,0.8,1.0,1.2):
    print(f'Visita {cpv:.2f} €: conversión mínima para no perder {cpv/mg*100:.2f} %')
for cr in (0.01,0.015,0.02,0.03):
    for cpv in (0.8,1.0):
        cpa=cpv/cr; print(f'CR {cr*100:.1f}% · visita {cpv} € → CPA {cpa:.0f} € → beneficio/pedido {mg-cpa:+.1f} €')
