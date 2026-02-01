import os, re
d = "d:/Project-AI/TNE/Sugar/Output"
base = "https://aravindcleaerr.github.io" + "/diabetes-guide/"
tpl = open(os.path.join(d,"meta_template.txt")).read().strip()
fl = ["fasting-festivals.html","weather-seasonal.html","travel-tips.html","workplace-management.html","pregnancy-gestational.html","diabetes-in-elderly.html","vaccinations.html","comorbidity-screening.html","home-remedies-myths.html","tracking-tools.html","telemedicine-digital.html","caregiver-guide.html","doctor-communication.html","emergency-preparedness.html","financial-assistance.html","india-resources.html","video-references.html","inspiration-stories.html","diabetes-glossary.html","resources.html","terms-of-use.html","index.html"]
for f in fl:
    p = os.path.join(d, f)
    if not os.path.exists(p): print("MISS:"+f); continue
    c = open(p,"r",encoding="utf-8").read()
    u = base if f=="index.html" else base+f
    m = tpl.format(u)
    old1 = chr(60)+"link rel="+chr(34)+"stylesheet"+chr(34)+" href="+chr(34)+"styles.css"+chr(34)+chr(62)
    c = c.replace(old1, old1+chr(10)+"    "+m, 1)
    skip = chr(60)+"a href="+chr(34)+"#main"+chr(34)+" class="+chr(34)+"skip-link"+chr(34)+chr(62)+"Skip to content"+chr(60)+"/a"+chr(62)
    c = c.replace(chr(60)+"body"+chr(62), chr(60)+"body"+chr(62)+chr(10)+skip, 1)
    old3 = chr(60)+"div class="+chr(34)+"container"+chr(34)+chr(62)
    new3 = chr(60)+"div class="+chr(34)+"container"+chr(34)+" id="+chr(34)+"main"+chr(34)+" role="+chr(34)+"main"+chr(34)+chr(62)
    c = re.sub(re.escape(old3), new3, c, count=1)
    old4 = chr(60)+"button class="+chr(34)+"scroll-top"+chr(34)
    new4 = chr(60)+"button class="+chr(34)+"scroll-top"+chr(34)+" aria-label="+chr(34)+"Scroll to top"+chr(34)
    c = c.replace(old4, new4)
    open(p,"w",encoding="utf-8").write(c)
    print("Done: "+f)
