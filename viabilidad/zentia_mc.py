# Monte Carlo de viabilidad Zentia (descanso). Supuestos marcados como estimados.
import numpy as np
rng=np.random.default_rng(7); N=200_000
def sim(budget, cpv_med, cr_mean, margin, aov_mult=1.0, conc=60):
    cpv=cpv_med*np.exp(rng.normal(0,0.45,N))            # coste por visita
    a=cr_mean*conc; b=(1-cr_mean)*conc
    cr=rng.beta(a,b,N)                                   # conversión visita->compra
    visits=budget/cpv
    sales=rng.binomial(visits.astype(int),cr)
    profit=sales*margin*aov_mult-budget
    return dict(p1=(sales>=1).mean(),p5=(sales>=5).mean(),pbe=(profit>=0).mean(),
                med=np.median(profit),mean=profit.mean(),cpa=np.median(budget/np.maximum(sales,1)))
# margen por pedido con IVA (precio/1.21 - coste - comisión - mermas)
def margen(precio,coste,fee=0.019,fijo=0.25,merma=0.05):
    neto=precio/1.21; return neto-coste-precio*fee-fijo-neto*merma
cases={
 'Cojín pack 2 · 49,90 € · fábrica (coste 18 €)':(49.90,18),
 'Cojín pack 2 · 49,90 € · ELORIA España (coste 19,85 € sin IVA)':(49.90,19.85),
 'Cojín pack 2 · 59,90 € · fábrica':(59.90,18),
 'Tiras bucales 90 uds · 24,90 € (coste 13 €)':(24.90,13),
 'Antifaz calor · 34,90 € (coste 12 €)':(34.90,12),
}
for k,(p,c) in cases.items():
    m=margen(p,c); print(f'{k}: margen {m:.2f} €, CPA máx {m:.0f} €, ROAS mín {p/m:.2f}')
m=margen(49.90,18)
print('\nCojín 49,90 fábrica, 450 € de anuncios (3 productos x 150 no: aquí todo en el cojín)')
for name,cpv,cr in [('Pesimista',1.6,0.008),('Base',1.0,0.015),('Bueno',0.8,0.025),('Muy bueno',0.6,0.035)]:
    r=sim(450,cpv,cr,m,aov_mult=1.1); print(name,{k:round(v,3) for k,v in r.items()})
print('\nPor producto con 150 €, escenario base (1 €/visita, 1,5 %)')
for k,(p,c) in cases.items():
    r=sim(150,1.0,0.015,margen(p,c)); print(k,{x:round(v,3) for x,v in r.items()})
