<template>
    <div class="view-home narrow-container">
        
        <div style="position:relative; min-height: 250px;">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1290 346" width="100%">
                <defs>
                    <filter x="-50%" y="-50%" width="200%" height="200%" id="f1"> <feGaussianBlur stdDeviation="125"/> </filter>
                    <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                        <path d="m0 0h1288v338h-1288z"/>
                    </clipPath>
                    <image  width="244" height="216" id="img1" href="data:image/webp;base64,UklGRjYwAABXRUJQVlA4WAoAAAAwAAAA8wAA1wAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANkFMUEjFHgAADfC+bdvitP7/nffMJCEhwa1FirbQQqG4U6gsebv8k++Py3q92q4WDwkhBHeX4AlxG7sfrBaSyQ19GhETAMYWGmRZkmSVqhQ/zc8GDLyg4whVqahIiizJkqTEYnJCiiUURVIopT8fps6FIAH4vxp4HS/oBJ2ONxoFg86o43iOKIoqSaIsSwlRSYiJhBKTJJEqCn3EkYGjEySfI+A5QeB1Or0g6Ax63qA3GHijIPAAVSRVTsiyJMfEhCjFRFmUZVlRH0XNZEUFEI7o9BzRcQQgd0k6ITzhBUHHCQZB0AlGvUGvM+p5vUC48/8XfgQV1c0nAEA/tiypUMETgRMEnhcMvE6nNwi8Qa/ndYKB8BwPkO8lmwA8V/b6W/jRo+9f8SBua8vWj+zugCqqTGVFlhVFTiiSJCZkJSGKqqSIRCVERzjOwAm8YOB4g96gE/RGTqfj9QQ8AQj+SqrqJ6KPHNJzvQc6xfmHzJkjyydINgWlKlVkiSpqQpUVOaEqCTEhyWKMSrIqEwJOJxDBPFQMkBfVo4nHTV32ooJ1CftHAxmWt/MXyUopBaWqShVFklW1mdyIagapr/oqPWay3zgj8KwBWPX06Qt6Z7zauzOpz7dFPnEfTdzLp+PS40UYWr+EOAkA1Cl2CyWdU/50Knlpjc0Ruvs+g2vJmZYeLW2RbUpt/F8AG9/BVTTMhNPH3OPyboSB7YN3eq4tc0p9pFSUz0nY9eP7ynRuE/eiYjqeLrpf1w4vNgCoG2cjOr7NOK0+SjK750LwLeDH8mhFPdeYZxfTgwy590I2/FVd8Q4JQiexq48QbuDgFKKV3AGJydpq0pk1pqQDaTAtxKz4vroQfMsJPZKDPj6auBUKlw53Dk60lZI3ueNqGhS0jccX+B9AWYwMcLre2Nyjo7DeIeLwAvcMTnQXcR3EQTVn+jAWXPfjjtI8ujh9b2DxkWEYXPAiNI97Xzv6c7mhoEtr/Lu188sV3FmyZXSSjIGbpUcF6b04gDpN7gf30pBFGD7b0BZpj62H/8Q9Jbu5Fca+i/XHRF3WkoJFHsk8cP2jUf9x/VBTz6qmE3/i3nFrYTMyBw52Hg/mN64oPPtIrnvlg874znGjIfPAWHyFvx/i1spamPvW3Y8FoW/vDOIMkkw3PP183sifQc0IH+evT3aQzPBEYyXy+hbOHgmN3CrFLJ8s0Fmllyvq/xLRCOm53QpOIrmBibYyFHU6bh4FT+vsIvY9SL5qM7aSZ6+/xrVRV2RLfEKy/ROdT1HSPel7BBi7F/0IziOV8nj5C/K85pukhcKOb/FpJN8701mCp10TvgeP67o6gDxBUgLp769qSVPRhJy6jA9T/s1wCnDl6M9Dectk8KGry15Q4eSR4sSnjlK0Z06rqeKHt0+vlpDSi9nhHFS9Go88bPnN9hhO3Uh59G8DJVyX7FJTQ96oS9GvSLHbNZSD2oZvsYdM17d+g8gsNBj4NpLLD1+u05SU10wn/kTKj9bemsnzutHYA9YZ2qKqlWgBnvHfM4WPezupyB4cjdhJ6nCw8c6Ihmdj4oNVVexUsKZAmxdzH0yGX5aPk6f/OOs5uIAG6e7uuwzyqmxUeqAs7c4wrrag1d2dD3rTbzOXyeL6zvc9dmiSbp6+NXBNRRPSg8T3HbghTkO7myfvBMtvo94k1WfPxb5Ao3Tleljg3mRNKQ9RC12h1MppiC6G+/jcD18CSSluGYuPQ7N02TPMc+2mKfXheVo1J2ErAk3bSDcp6v0aSYLp/URgkWgHymK4X+DbBbv60GT0LvrgW4a2FWtuE6ls+ZS4F/9u7dy9Ay0rc0ovp+uW5tSHhfSfHUCagtblP6vrUVM7Jt2DdEZXA5PQtuLguoiuN+KiD8orwyKlc4LmIH5prCLNOdPK3arLrPFRaF2yGTuIvs+39JAUvnTEcXSNNIx96ismXboZ9S753d/iM0RzEK1ZbSRj4GKdPhjCwKoHwTmkZfjTSD7XG1miPzIMO3wbAaShOJP/Gsa3h9v0gSDd3h3I0yQ94B371cJ/OF3/ATd4un+5iLSMTZe9hGl4d+eBqC5wKVgWkK5X1t+Nwi/be99rzHCFx5Cm0YmaF8gc2jp4ECztzjDO95G+x4u/6zN+mz/9S3nDWHwMaRuZqHuOrKGV4weAH9o6R3QG6by7/YvO9KvtEjD3T4ddJH0QsjZUImdw8ZR5pDW+QVUbl1Z0/baPz3k36tcNr53vHyOd/dbWp8jrm79gXUmlS8J6HOlN7bSHKxj62hBZu7Ujvb1T3U9Q2DdzwzZTv9OHq02ku2ozvSFlQ6fT8S9Id4+9uxBFfdYblnF9xycQZ5D+0nhlHSnyxSeR/heOwTw8abd5GdZgWFGpjWMApL81VwE3ZwzA+exwLsrfTASZlf/aHseuH0yUIjlA8Qurmn44m3+bjfLWsRCjDAOLXtwugY0tWAJIF3Go6YfjpXdmUvVyMsQk0u7bg2QlbHhWNxaf6MzhB72rNP1wtPLehLq68RiLqoudMuZ4MDGn/1t0Du7fMvmPJ+sMoPvbI0byvGY0wZ7sdnsUh5dgov6d07Plwbnrg1H/YfMg/UA3j0cMpKF8IsEaYWDzEkEnmMh13+xeOwHs7r3XZfzmOE8/YN39TuCaCqYkxrQmNqhqI2xoyLOFRwGArl8MC+bfJm4YoK5djgjcmyefFKaUVc7KWCJgYvGbb/EJfJe6Ej1czvuvgfSDshTqF7jG8k8qQ8zdjhDODsHEzJHx0AL3PVCroYMUDfwZSj+oc3IvhzcFYwozSO/JKeJ2MFEY2jo7PMSPlfHiRlLe/jmWflAc6CHoNk6qrGghy6pqJUwgbdKybxp3VT7XvkBl459i+kGazWjj0MdPMaKobSyBjQSYWFU5Gf0Tdxe/NFWShieTcvpBnLZ0EAzKdsoC/T/8IcGzCSbmDnyOTZN7IPq5vwjt5ik1/SCOF7SBjISclAHDm5eQpsBEw8cp/3oc9w59fpfHdarzavoBfy9tBvf+ajn96rMdoDaOCdzg0dH5KpLoGf/Vwr+9XqMMoH9UvwL3j/vr6Zbb/wfFvg9MfGV0BUaR1Evbb0bh48EWA6D8/5fPQf5lezO9+N/GogjOg4lPX3+LfkOSj5Z/0+t/WTtkAOT/1VEF4R/Xd9Oq//wA8v8DE80j38JOLlnY2fugM/46d8YAKP/VXwH9vziP0qiqbBrUDibq3i9c7V4h6XQ10MtbPkx5GAD5f/WUQ/efU2dpYxr+rODsgAlcW2jLY0cKqY30kLyRrwEGIPL/hkug/8+J8zThf3F4EfkMJtaUTUc+I6XqjLmFFHeNRhiA2H//h3yY/nHiOj2apQ2oX8DE/N4v0VGSGkij1XWkuulzggGI/a/f8pD9j3/3pUPRmz8pXGCi8eNYcIlDqqW/tVSirvabxAD4/vwlB1n/9n8C2jP84/8XcbXCBH5gz328h9TH/97zBK8LJhUG4Hr8HzOR/fsfIa1xw6vXiP8NLCSN+gXfBLQY/jRcQDoMMyoDcDn6byYUf/zfYY29sMyDfgMTSxu/xT5Dm76vv2ZxvdEllQG4mPkHIwo//u+opnIH/j/FZoIJlpEv0WmiEdxM/Wbi35+vUQbgcOEfDSgZ+COmId2vX+PwTYOFuo+Om/UoNHuy/CFD+HCxTBmA/YV/1aGy7Y+EZkir5xiJcbCQa/fuX29Aw7tnfTpD58U+ZQD2jwZ1qH7xVdZKWc20Sl2ECTXFc8EpaFlZSnQKue07xyzAfHCIJ00lY7I2MgfH4zg+BgvzW2cCU0RTkOf0rVzhm7VzFigLkUGOtFpmJC3wQ5sXCE6Bhcah+etFHTQuzma/JiXNCzcMgDKn9nBch35G1UAjvwx5CiwUes4OD93QfGwmr4Uve+nwMwCKzdDOCR2ClaasuHFCwTLHAtKkW/Q4kYbR+fxXpLLWHmYApBlLKxG65Tk1RRnD1hDOtsHC0jpbcIKkA4Ku8lqu7ulsjAFIWPNbIPQHlmhKSM/ZMaKTYGHJG6vfxiE9fc76Cv5lnk1iABKTZQ1EP3SzTFNRl+eAOgUWmrs2ztdEpOvNYtMTXaNxTmYA4uO1tcQwdL6WgryOcREbcRYI3WdHJ7tI3/PV9nx9q7KgMADhyRe1yHh7uJ003fD8LW6WwEDSoq757UhjerrZnZ3RHl5iAYKTzRUwjWzvJqs9uIPEKFhY/cTltZF0Aj3Y7zeZOjwblAEIjXaUwjy8fpCcyoppihnCgrzXi95ZHumt7p71GC2dJ7ssgG+yuwSWkcWTZJj7JuPYvQUDjd3b7iWCdFfWQp363NbdExbAMzVYgKxhl/t+/Nv1S/jmwEC+w7d7eI70l5fFTr6wdeWCBbiZGs5D3uDs5b1alFXIo2AgeZWxfLkMFiaWdc18SePSDQtwOfs2B/lD1ut7lLywKnBwLHhatXhrJ0xA1Jn/intW6wixAKeukSwU9k9572QYngnhyA0GZrcvXzl0YGTYWfqc1FTZIizAseujGSVd07d34PqPThCyg4H67uOTtTiY6XfWVXL1RbNxFuB4dTgT5W8mgj+qt8xTdRxpzRkyzRaLOWtr4+QQDPW6XpXyjVmzEgOELO9VCfCs9esPctsmJSzy6UF0GVnmrKxMM6+IiWjEcxxfBVMvl9sKdM06p5xOvDE7pyjHTKNLBwAqC78nfJj14WIb2iaCMcuYnZmdqacJMRqOBKNxUVRUWeBbzq5YQs9Xu3L1rbKLpgXhs3Nz83P0Yuw24A9FRQrg9vI7pNO7h/gktCpkmCyW7EyzAaIcjQXCkURClFUlHg6FgoGo1Nbw9OWCjyFQjw86LcbW0CrVGJeZm5tTaKSxiM8biCVkSqWEBUD4G777rMxG1SmSMpJhzDFnWiwmIouxcDQUicUlSaFyNOILB8NRRWfgCYCdmme1FY4oQ6DuXPQazB1nu1QzBlNRQU6WkIiGbsLBuKiCxr0+r0/8JQeIfcV3zYPjMWxHkHSez7SYsszZJl6NJ+LhUDAmJmRFVcRQMBwMhyTodAR39TmbSutzXAmGQNm87dZndxwcaIAz5+TnFBloOBjwB6IJhUIN33q8vkSGAOG3iBvyn+Q7/PDyDW6duD/hTRZLlsVo1quSGI0GIpFEXFKoKkfDwWAwEpV1Bh5JvdxozW9VlhWGQFqWOvmClo3zVHAZlpyC7Fw+EQ7eBGNRkYJKIe/tdVjJ4PBXrje2QJVRDt9tVtYgfsNdeZMp25KZnZmhioloJBaIxeKyrEKNRQOhUDAaJzodh5QeHHbndvk2VIZAXOTbSHGr6zo5XFZeXm5OhhILBr2BWEKlUBO+2+tgkDNwuGObwaGoMzy+W/JyUqGzBICgy8wyZ5ktBqLE49FgOBJPiLIKVYkGI/5wMKbwGQKBFumWtyOn+3SfMgSxectr/mnT3O09uIzsnIJ8C42Hg7f+aEKkgBLye72+WIaA+zYVTktwSviucXgygmux0WI2ZwqyGI9EQtFIIiFRStVEKBgKhcIi0Rs4aFpZoi35HdunLEHEWfSSVLywh36gy8wvyMnRy7HAbSAUFRWAKkHPtT+oGngks656Mo5VL77L9R+4gZy3ajwSDsQScVmhoGIs7IvdxsKqXs8TpKXkyHlZ3LFwyRIEXc+quZpn9ghnzM3NKcxELBi8DUYSEgXUuN/ruQ3zBoJklzZPRrC/j+/X5LooYBBEmYLSRCjsD4WDMnQCh/SOO8qqi9usIZbg1tlQwdXXyll6MRL2+CNRUQWoErn1eoNRg44glQV9k364l/FDSSAApGggEgqGIipv4AnY6He+Ki17NRljCa5XmoqF6mx/ICLKFKBS4NZ766cZPFKe/dZ2gxsbfnx8NMCBzm8ZdBwYe7P0uuRF6bTIErjdnRz+qsYC1/7bCG8g0KRpeNmNwCTuSJ1cO0jjzi3Ye7Lal9dkdCosyalYpTTk9Xr8kk4g0KxuZH8Psa+4s2StqIFlyOpnDz1bG7J0xpYoO8ydB8fqrlPPQdv826t1mhjFPePjnfkoaftTYg7o3smApef0gLLC0OHdoidb0DrpTSyo8gS5D7z2d0ZSXT6lMgfqarzDMrByzgihRV1Wrpeg+Q79rKLM8Lj/8cZHnnRIi+yBPGdqLui23zKBa8h2SoE5ormmghmRuiQkkW6EuogweLLHHsRtFbUlLdYwA0hlhTMac3DQem31VByrHiRVteU3wPR29pY9iEw1lddUTybSr6TR5RPneWi9rHkyjJ1DJDk+2fQUuX1jUfbAZ+vJbyiwyemW27Z2qSzL0HpB75QfpytIenDiXSYqX3xV2YOrxf7sVjKvpldm18ER3bqB1rPe2m9wbUcKrxZGDORl7gxlDz3Ye2vuvt2g6aTv9G6rRwfQesb7JTd8k0jp5vUQ+O7bTfZA3fL0ZfYfHKSR0KIuK5dr0Lruw84+DY8htaqLb4V+eOOUPVAXlI6c3uWLtCEvc5yi30W0xo1cbNDEKEkR5Mm6CmT1T4XZA9FRUF/YYfenS02FIxqZI9D6QHRRlccIUh4d6y5ASdtXkT2IT9dWlTVNRtOjrGEuIDp5aL1LmFXoBAcN3jg+6vG8bEJlDwK2tuKaZ9NiOuS/WbmWFzlovanAKsGmgyZPtt9x3Bu4GASPoz+3KcumaM/csX+ibgSg9ZqayQQWwtAmXRK7IPQfHzIIpysj5lZ5WdWaofNmWz08hdZL30yEsXkGrSozBS9hGnZ4GEQPTvosve49qi3hjbyinK9D6/l9U34cbkK78ak3hcjv+xpjD9SVaJdlYONUU9wri1PyLkDrme/t17hwQsuByREzyl6OS+yBNG9uzOtx3miI1JTOxcIOojXjh8VT3Fqh7bPlDzrSaLExCOJ0+fPitumQdsrqnYH4HAeN8x/3dhEehcbpzlU/x3dGVhiEsLWp9Fn9ZFwrBc0rN/KiDhrn3p1v0MQXojWo8/k1MAy4fAyC39mVXW9xKdrIeHN2Qne90HobFlV1gkD74peuIlje/RllEE7W3hl7witUC7qO6DI92YLWm4onZDrNIR1Df/5uREXjF4VBdPey1zR4cEhTxzVnONSrBWi9qn5UxEIM6Xnt/EVAQ4GVsgd0jnZmvnedp4w0FFnlgB1af9L1JYYNN9J183qQcD3eLQZBmcl/mTNkvU3Vs+fWWNRGtJb9/msQh6tIW9Vhaobw65KbQZBGn1cXdU6EU1P0xh4UnRw0XjQ47sXFLNJY+fr6KUwfv4UZhOhYZ1Fl/ZiYiuyulUtlWYHGc7rX3LgdR1on/vY2D/mDfxMZBP/UYG59oU1OnrH7+EDdvobGzX3bRwh/Qpp7Z37Vo6p2VGUQzhfemzoVl5os3fDFmnqyA41n9J7t0MTfkfbHmx858oabZxE93H+bMXC1RZPDd4XX1OsFaFzf7V+l8ieSflhOdBBu+PCAQaDLgX7jyNZRUkiTxa76HdC40K4sKLFpAgaqk2V10P9qv2EQVKexyTI8e5MEUl09IUUc0DjXZHbIooMDE8UvfXnIfvf3OIMgj1XU5w6NB+5X0jYWS8wTjZGGEqsoz3NgZPjLbyaUtE5GGIT4eFPZk/ZvsfvkDE75FSsPbZOqWmtUXYqCmeeu33k05jpEBiE00VtQVT0p3c30znmpzkPrT5utIXXjBgzdvhgipBWLKoNwPfPB0pwzrdxFP7R3SDevtVbUaffSvSOwlDqyXkLoPd+nDML56pCpPbau/ojvCa7Skw1oPLfXdUlPN8BW+c/mUmQMrJ+ziG5eDhlGjnZ+QJpMc6rHDo1bejZPcb0A1kY/fbSgoMUZYBDUJaUtc3jF/b3a6nEpPAaNG7vPdumtHez1TQ9l41mNLc4gKFP5TVkjM56/PGn7Fk98IxrTdwVX1aANLN4/6TaSV5kumUEQJ54/K+wbDQM5w6NBeYJA20ILN69GbYRJdC3WxnNdoXXKIMS+dZSUNk7FMt/PeFQHD21zTbnTStxOwGbVnttADH17JyyCb3oop6HEPrh1oq4FoG1SXzopSfMcWC1Zq5/B0rtwwyJcOUfMzc/XNujRLrRNqp5PxJVFEez2zbUV4MkrR4hF9GB/OKPsVL2eg7ZJafNkWN3wguWXG90m1BXPiQwCXecbgPAYNF7YYffRvSOwfcvboSet6orCIDw1HAKgGsvpXrqkx5tgPJ3Xveb4vstdyp78nskQJebhab+WzD27R7hYAPOlmbIaYupfO2dO5vDctbJUUlrcMRbVjrH7coveOPEAxmaaipHT5vIzRj+yeUzXz2MD+VV1Y5JW9O3RZeqfxYN44+rKRVXVbJQp/MD1pnq4C//ssOVV3oyiDf6NzqGG7XggT447DXhpcckM4VqJS72cA3C8+jGjU3VSLXCvs61KbI48FHRFahH4ztCGygxSVzot304BAN1zD2T0Xm/T1JH6p9OiNM/hwVRn8ho43cDhEWVF6euxRHQU31VdtN00suJOGamsm44piyIe0IT1eTksvQs3jMgbHAuKY+R7UGYK6y0jNk+qnjbPBNVVPx7U0GxbHgpb7GEmZL63ehU7hx8nRl89K+gdD6WmsN3podtuPLBnmz2ZqCmdizPAMLJ2ShcTuGv0W3dRefO3eCqyu9bP6NEOHtzt6y49acGymnb84OWWun2Gu/um3mbXVUxJyTP3HO7hbBkPr7qgb+SEvssdmmZcu7Konq7ivucL70wthnk5WRldNxu4duIhVqzlVcQwsHmWXqShcEb2zuD++/vDGT3ynJocXUd8kfoceJjDM80lyOtw3qZVRf1kIjyGJNLVYI+xI7xCkyG08g41bCMPFDwL3Vkoq3HE06iwazKUGCPJgDprbDZ1u/eSwDXm2OSYjeDBPj7pyECjZV5KG8vQrEeZ5pBcebKiNrt7w30vrq5sWhQdHB5uuiS38lxndE1NE8PbjVN1gSLZ8bG6uoI25+09yLMX01F5nsdDrszmvyD6/sPD9BB6b7bUrUskPzjbUF7aNB2529NmW0BZieJhT0w1lMHUs3KTDlyzbl51ryGV3vnOvOrqSfEuBR1OD926xEMfcLTl40njbEh7pK58UvZakdrzxcHshoIZ+Uc5PStndG8fD//ZTrcRtaWzCc2VNX9LhMeRYnp4MJDZQlzq98w9+wc4XcMjkG76O3SkmawoGivoGw0nRkmqQDdv+kwd/g36l4zuq01cLOBRSJ3GVxzfd7VDNWUZnvHKUwSpl5fQZu7eOwag74wsUa8Dj0TR+qwGxv6NMy1lDK+6VQcPLUqzua9yepYuIbTwTjU4Sx4LiMy+LkRO5/ytdoS+yx113Q9tRm1VNUVtttCrvBk5OkPweLxa6bagvGYuqhWunbrUwx1oNTjXVFLWcFU4JYp2Do/JvdOeDLzKnpO1QRoKrcr1HLR7Pd+b+6JqMirN8XhU0hX1Nc+1x9dUTTxrGBODo9AwvThrE3hJWZDwyFStJXVE13dySDVQ1DUWiX0l2uHNVS/cdhXqmg+Pzvh0fTksvUtXqbMM2W6lMQKNcpbKF1lXm+dR0B03HqG+1eZsFDxfjqRK37PvVpd00CSfWVxRENk5j6qQ/adBPEr3r1oz0GheTKRG6Igtq9vX0CBnKanIV92HNzKU4NlxAI/VRaVFIO3impIKrsk8qxxvI+Vc5pPyIvnk5EaGEro68hI8XqW5vBecofPskCaP1JVPSdcupJgzFVcUUfe+R4EauT6+5vG4jdufPyXmro2L5JU2TcYCM0gpZyp8Vkzch5cK1LD3+Jri8etbbM5H8atFX7IKuqyB6AxJAcksrCjm3YeXMmj06vSC4HF8dNyeierS+VhyLH1Ll9IcQbKJqaCyhHcfXkqgcc/RpYLH83qoVU+ahFUpGRl9hwfKoookGwuePdG79y9lIOE9OY/hUU3njQ0833W7o95P6AytqVtXSCbJyK94knGxfy4B4q3bHcGjOzFbXkVM3Xun9D5cs2FOOdrG/YmhoOyp8frAnQAk36k7RPAYD843FiGnbcl7D1JbZpUuF3Bfos8rKzN6DtxxQA6cHQcIHuuXm21ZKKt1he5W2jQZ89lxT31eWZnZu38aA9TA5bGH4DG/e9luREP2gniX/C6bP2rFnXW5ZRXm24OTKKBGLo49HB756jLXyHNtiXXlR+bBxQvRTu6gyy4rt4T2TiIAjV4dX3H4CVRsxbWcruf8QP1eRt/BoTLP4/u67LKy7NDhSQCgMc/JhYKfxOjsi6fE0rl++R2hK7imrgbxVyG7tDw3eHQSoEDMc3qewE+kZ7EtD4WNCwEAQpPOJe+dAOCzS8vzQ4dHQQokbo8uYvjJPD1uNaH2yXwMXGOeTTxfA295WlEQPj4IUkDynZxG8BO6GmvRo9mwKNc+dUZvXTn1z/LE4/2ACsgB96mf4KdUcZpfckKHL/p8Liif/d4kHx97VEAJXJx4CX5aE/aqCmLoNds94Bv1Jx4FUIMXJ14OP7UhZ1MhcjkvQIgKqJGLYw/BT697t92C79Po1dE1h5/ibU+7AQCN3xxfqPhZpgt8Ix/3nLtj+JmW7Ub5LIGf7cgMHrUAVlA4ICoPAACwVACdASr0ANgAPp1In0olpKMhp/Ya+LATiWZu40MQIh/EcYC8AfoB9aEgP4B+F/6AeIB9AHONfhz+pNpmZW7+NfhzcqSAxs0jfd/0/0s7J/tP6pwP9o+Z+/h/c/Ub5gH7AdJn/k+gf9ufXZ9R/+c9Q3pVf3Q4EX+x/8n0tPUA//+wz/2P8FP2Y8zv8n+EvI8frlqI9oHsdl/cKNI7+z68fUC6MX7Yf/////Ad+shp9Z5LQHYkXUJfQaiV+x3N7Wl36dbspp+M6z91wn3MucVjUajUPaCDQ6plEa8I0B7umJc3/wnp9lAVxzB3PoZudmuoxRN7GR1aAd/R/mLxc7LEjekizgdwMCf6C/OBe6b8TiyPGTR5m2iHWaNPwai1vk4rhLIPbZbiH9CYW9o4LHxYasn4Ieh4C10VflKcX0992c8gM30N5AVmCm7jNd6FmXeAoSJllonRJG0DsZ8y7ZVy1fswTHYnD3RCv/gcBzu1tEcG+LPut0PjrRFxmb7Wzhyq+iYYz+4ouUZtYn4QFoL0y3MzCgJmZ3Mu2KaFYs0GYDP5oxj0+l3b/9urEMnq7Tj17n68Ox+qNMExtX2VmCq3FUl0wAUEkhDnrFlQs5Hmj+wbmWnVV9XmMN7kGMDxA8Sivn5E/eU8uQT6g8zeMb58nTezRMZ09euc0zAOcPgz1xdsgLe+aE054rEF3MgQrsneJtL2ZQu+Zcv+JAIbqlfcaPkXw0vT/lz4//cXIrm9ZH9uovbLL92jUFi/L/jIMoawFvrQyoEe7bKIgMsr4lYGOFFVarI5rVxKMUXjVBqcp2ifXMCecXFvN5vLuQReHJoCz4QpELTiLEnChedY/4Wv87hIJBIKmWX588GVKfNaxE9GQdBAp765OJ5cMUEgkEgpHX//AguNF9n5dbEPAAD9AcE0k40rmGJ0k2mu5ysV7Qsh8N1ymlYGkVYlLeKrsqNvL+bMVBsGT2e1hqBrJdQK5ExB51n61O070WadrBWBHU4IzzoWIWzc6ED/dtub3IrdWlDIadKWkw1do0Ln1OQIe6q/hcOq+Tdrtp66pZ/MuTfMtUUhMIPhxk8jMIQ4+2hMrD1eAoezfRaH9yhrAh6ZuZDIcjYB2G48AY9ve8/s3imlNsKrQqnVMFH131vfK/tk1l7xoU9/Lf4ADHt94idg2Lij3L5KH1fis34xRMX9KNZOax918pgDA19TLlAq1FpXyevYemt9Kfn6BmPA7GIm1Ig6Vr7zHXcYdmJY/jefWT1yW9qBHzQkSM0yXxiuJdmlPxQX/nbIVwqonQOEMViagJH1NF/ugPRhE+kAXC0FZ5+jZAEGM4mKtMPQ1iyb11B9KlJMD6UWed0TT96ZSGJc40oPHJNN+WpXIl02ltg7p+uxFIjoJxRuaUrZtmXPig0AYyXnnwdy9LRFDQDoLaPtzRxxFqa+LRfZNH8+7qCiW6F6Di2PQvcUp5oa6eHEKzJS/ezljugjeCsnMed0zoom1fnObtu3w28QfQPedG3esZqu6sVKLMCussx0ue7b97Xl6GE8gBFJio/VEd1VgW+N8H+U09LxE6kH8Bync0BExuYywmXXZDbpuXUWBUX3NuesVpqbpgL1FKIA5OFSF7fMs7LgRl/PfIrMhNvIQg65ZbPRNREKzN0GA+GeW4MrIE5pnDmT14BF4ToRZMNt2Mwbl9+EoXZo+x4fPcy3ZNVzxBHF7dIuWsxIwwEEavije3k7A3LgiCnd9Opd7KkrgggGHM1FOcWAeUIcQ329mfvRGH2HmVvsWcXj09zBUCrq2UZ1RzHqXvLN1jYjHjzVUAXIHSB2DSQG5VCu0IAAzPeCQAfVTUjK4J8V4gaZIAA0qQGvhgjAEnjFcvojue+YY6YSE0+cxODWOA0hhvR6jQGOJpN+Ss8MVqjaGm85tgbicFh+B32Y0tVdnYyy1yWcB89MNfofgAMAkVDrWJLv4eWpRNNqXax9OsLrcK4qlzfmSIRO3vnTd62yx7hBFRZzI8WODVfoT2kwKdbL5NqI64hxdO6IbkHIQgXLXj5n/138ndrGbutsd8h+fMNmmm3hj7n5Mb0RGF+zttqLNCcIRKxigpvOyI0/hjK/g0fsURAh9lzV1idM82RvjrPt2Z6YF35mZ03if0iEOOfjODM2ZeYuPMIECzQACubhFYRfUQmEWXgrBaGL+2fvsAgmqNKNUHyRFKMqwAOe/kGxoTaKP7mYrLSj/bz6rCDjpklqfT7aixu690gJ7Rs/YBBw1VvItIoyECXXRcc4+QGm3scDACt2j0AfiF+j4n6FGiIkKBuZUXpeTo6EjGPrZs1RDTEjBz7v0KuFLb11N1MSF80JS2QasNF+TIY+ktA65xB38FveYTjGmH7kRJJktm2Qw4Y2+t8q1Lswze70zGjGFvfJNh85MkOQJLNuT1D3NYUSLoYJ5cItNlS3UV3MxHYyl8dwAFF2UjJiwKPEOCTfWUJDYFlWV6gsclBqNprA3i2c/nB5yWqaOioL2vHuxDt/3UVwM+uwjXffwweCYUYgfdv00AAWDSdJfDKwyistEZoOSEeT5NWn/5TxspZzVx/8H0Sx2p1mJ8MR6YUyh28WI7rqgta8qKlyRk16ZJH4+aOAJM0kzOt2cfUNWB71nXYm8oDfALuDQPQos45KO3VZW6jw7qtQKP7XpsJ8AgF66xLOCiLTqi21NA/QmtjICwcwqp0iC+emwJ+3gcGu98H5YiI45/0NzUGsPxJBrEvvBjwRLybm8LYx9MIcw/wUdJVji2BqjYoREMTURvN3tU0ReS4CAAzmGHPdHk2DAsLC6Pp3tGU4ob/um43yI++BpAuWoxtD63DjjyK/+2sHD+fxDyxy4RLlUjBq93uyCd2OmIk4LXumVFGTQuvxlwlblDvH4EpaMSyT8sFr4UYPmza+0BPAD8nLaQMD0rDEJZrZRaRy9MRxqna1pTmHgz148VIVURHGffSkq9E/lPZmCDy2KhXE9ngv6F5EU/zbR+n9pYwYM76pSigwD5N40AEY0F2s7r7EV71I7DUdwCbWsywTZcwv41mwdpnH4SeEytu8QGDUMsbC2RhhwNxcqdH+ZbfpABt3quyM8EaDrhMN9Pj6PllPKovLmacvQoA94atCOOpg2qHA9Gje43WBvrLWgne6jVUTGWRCfy1r8PdUcxckuPLx7PN07vKsoIgCQPJUL42WuE5SBsZYAOHD4Sg6PuNc5Ook+ZpapFo1qYJ7BzF3twk3/ETDG+/zvgGoxo0q1MpO+nTd530SAu3z/rF7BtC0d9dBsxBRE26UpfHFfMktnLPWZMltAM9T4vYH7A7cMucaim+MkEnhZFHyJXXZQXKzD7Swf1xVoCI1mYiiQLJxSqrLcZwMeT22Vwh0lB0QRSk3Iw2PsjLU4RLSULz2wzIRebisCzct4NJ04vpiqNcdcqsv2bPxtVDGrjh6Yc0d+wCDfdAGZliSO8J87XL9I73FMoSGyC28voT6De9qOHt+2FXQimHyGw7FzJt9hMHk2Af0hLBwA0FjWLBgmiaFeAXi1yr+4tYMBGSZWVOuG8AhroTycuYwb+BDRXAavHr6+/jRb/IAhtJtt0SvBSJ4ehHOPRTINcE+z3XdGtyZAGbuCqoT9nNK3VHOrTJFfrB4oUDyGsp2RujQYsAQ+0t2TQjO59jZjhiBhyZbhQRHSeUbe6RgeeO+uSbnVtT1xhg6vVbwS/QCYYKVk081BBKE/1d14O4Dp6J9wDnzbGlsf+h+r3Enr93v7P0OCffoDCd+mCVdcSF92hNMnLqz24PWvFF3oMB3DlD3PSCEsWtE/PzeTuQPb0MBQFM/TFuiuyg1W6ZOK7zKgiJcBRrldMQOquHui+b19pwVdqi9lWxtfNvyfrPCwudXZgGpCrJswQekt57B75T2terwKNK0JO/l88Xd26HsCqgJgp3mVUf2W8orDuydVkeN8z1BEW+XSgnO9V0P91M5KKoA3aIIczzL5m1Zr7jFzzEIgAlVAHIIiCtyGph4dSr0As7faBC2bAZZYikxb5AAXpBUqjJ/03ICe3EJWekhm3z7+45lSIec0AVEjj8zsGisKEjWGzAENGlwCW2s/vvkX0BkD5t2/VjItUqqHBxM+/AFVFPxb68JCjuaSduBPBeNLscKMa39l3ZRPMjkbH7fPLksD1yZY6KYDpCQ7y0nhLOTbaO8/nR5RD0s6IZIGegVkemGEEn+91fCJe2jMO/GSKuqxlFLYV7O/8Z8SsEUXD5eyntm568Mmme+QH4NibbPeXrr/vqfZAJdGqCS93Y1sMKlueEMXdm2MX9TSn1nVindO+men5v8+xauzbn1557E3q1kykMZnnFJniu8T/A4di9istCPCsO8F2xaPqQqIJt86Ajw/b8zGR2oIdJD3eOwC1bMFGSHJkCt988xufdRywDldTiwKKEFL1gNAr8tYtStmZOcJbGpPJuJKphm35D48Nof5nL+A7fonSp/OZO2AcSIAFBc5Con8PGrs+wIQ70VxJ56kwfVF9NejaDqA6Gz4fhC7U9aOyIFNtY1pRfDVFlEVgH2hmyM6pG7eIyfZmvKi/VMNYy8sSCKAYv+kQ27/XgB3E72P7+wnR9sTbNXjLUaS3AsK4daG/eUeEn5EPvvGX9e70CwcCkK6YDrE4zDre2g9j03WAsrl2IshjlD9ZnNq4+UXoKWliIuRqgUM54HjFfBbJhgjiDi7QggEV5HMT9SuRQMUVkIBWCr4oNM/lUvkURr+04mQAAk0eKDkez98uyPCHrQb7sNvsJTmihoXfExQ3kELtuD85yiXcFgXV0Q/xrCfKLl1ev55HuH3fJ3A/FfQ5BBHqlIaIR/Vn1o7Sp4B62eeaF8PRhOhaq8K4Hmu6v4YThWdETePODuaBrGtsq8QuEZIz/lF8XgaJEbHKHq0Wd5LhlFGk11a92Be2bp69kTevM+KrlwMLMsQpvycIBVuigJ3j2hxLgCwCnN0hWLLfsxmdXtdO2lvd0+hZ+KaKDgdCOdyMyljmAJ/Z87BHscy2Kbvxy7JyrUM0fJ7VWXiFepOcb5XO0+vgI3gAAAMKYDYKA2Da/9Lr+O769KWaqqBWb2cgCFu2T3MioSwG1IevplaqQKzeXnAE6ugEUwylbrbX4o1lBLJ+dbej2eMB/m4PaetMhQkLqZ2ru7q7NXQy8dOAAAAAA="/>
                </defs>
                <circle opacity=".4" filter="url(#f1)" fill="#75aaff" cx="626.5" cy="143.5" r="263.5"/>
                <g clip-path="url(#cp1)">
                    <g id="Grid" style="opacity: .1">
                        <path id="Layer" class="s2" d="m0 312.5h1288"/>
                        <path id="Layer" class="s2" d="m0 286.5h1288"/>
                        <path id="Layer" class="s2" d="m0 260.5h1288"/>
                        <path id="Layer" class="s2" d="m0 234.5h1288"/>
                        <path id="Layer" class="s2" d="m0 208.5h1288"/>
                        <path id="Layer" class="s2" d="m0 182.5h1288"/>
                        <path id="Layer" class="s2" d="m0 156.5h1288"/>
                        <path id="Layer" class="s2" d="m0 130.5h1288"/>
                        <path id="Layer" class="s2" d="m0 104.5h1288"/>
                        <path id="Layer" class="s2" d="m0 78.5h1288"/>
                        <path id="Layer" class="s2" d="m0 52.5h1288"/>
                        <path id="Layer" class="s2" d="m0 26.5h1288"/>
                        <path id="Layer" class="s2" d="m0 0.5h1288"/>
                        <path id="Layer" class="s3" d="m25.3-950v1288"/>
                        <path id="Layer" class="s3" d="m51.1-950v1288"/>
                        <path id="Layer" class="s3" d="m76.9-950v1288"/>
                        <path id="Layer" class="s3" d="m102.7-950v1288"/>
                        <path id="Layer" class="s3" d="m128.5-950v1288"/>
                        <path id="Layer" class="s3" d="m154.3-950v1288"/>
                        <path id="Layer" class="s3" d="m180.1-950v1288"/>
                        <path id="Layer" class="s3" d="m205.9-950v1288"/>
                        <path id="Layer" class="s3" d="m231.7-950v1288"/>
                        <path id="Layer" class="s3" d="m257.5-950v1288"/>
                        <path id="Layer" class="s3" d="m283.3-950v1288"/>
                        <path id="Layer" class="s3" d="m309.1-950v1288"/>
                        <path id="Layer" class="s3" d="m334.9-950v1288"/>
                        <path id="Layer" class="s3" d="m360.7-950v1288"/>
                        <path id="Layer" class="s3" d="m386.5-950v1288"/>
                        <path id="Layer" class="s3" d="m412.3-950v1288"/>
                        <path id="Layer" class="s3" d="m438.1-950v1288"/>
                        <path id="Layer" class="s3" d="m463.9-950v1288"/>
                        <path id="Layer" class="s3" d="m489.7-950v1288"/>
                        <path id="Layer" class="s3" d="m515.5-950v1288"/>
                        <path id="Layer" class="s3" d="m541.3-950v1288"/>
                        <path id="Layer" class="s3" d="m567.1-950v1288"/>
                        <path id="Layer" class="s3" d="m592.5-103v441"/>
                        <path id="Layer" class="s3" d="m618.5-103v441"/>
                        <path id="Layer" class="s3" d="m644.5-103v441"/>
                        <path id="Layer" class="s3" d="m670.5-103v441"/>
                        <path id="Layer" class="s3" d="m696.5-103v441"/>
                        <path id="Layer" class="s3" d="m721.9-950v1288"/>
                        <path id="Layer" class="s3" d="m747.7-950v1288"/>
                        <path id="Layer" class="s3" d="m773.5-950v1288"/>
                        <path id="Layer" class="s3" d="m799.3-950v1288"/>
                        <path id="Layer" class="s3" d="m825.1-950v1288"/>
                        <path id="Layer" class="s3" d="m850.9-950v1288"/>
                        <path id="Layer" class="s3" d="m876.7-950v1288"/>
                        <path id="Layer" class="s3" d="m902.5-950v1288"/>
                        <path id="Layer" class="s3" d="m928.3-950v1288"/>
                        <path id="Layer" class="s3" d="m954.1-950v1288"/>
                        <path id="Layer" class="s3" d="m979.9-950v1288"/>
                        <path id="Layer" class="s3" d="m1005.7-950v1288"/>
                        <path id="Layer" class="s3" d="m1031.5-950v1288"/>
                        <path id="Layer" class="s3" d="m1057.3-950v1288"/>
                        <path id="Layer" class="s3" d="m1083.1-950v1288"/>
                        <path id="Layer" class="s3" d="m1108.9-950v1288"/>
                        <path id="Layer" class="s3" d="m1134.7-950v1288"/>
                        <path id="Layer" class="s3" d="m1160.5-950v1288"/>
                        <path id="Layer" class="s3" d="m1186.3-950v1288"/>
                        <path id="Layer" class="s3" d="m1212.1-950v1288"/>
                        <path id="Layer" class="s3" d="m1237.9-950v1288"/>
                        <path id="Layer" class="s3" d="m1263.7-950v1288"/>
                    </g>
                </g>
                <path fill="currentColor" d="m299.3 89.6v9.5h-13.6v40.9h-10v-40.9h-13.5v-9.5zm25.1 13.4q5.9 0 9.8 4 3.8 3.9 3.8 10.9v22.1h-9.2v-21q0-3.6-2-5.4-1.9-2-5.2-2-3.6 0-5.7 2.3-2.2 2.2-2.2 6.7v19.4h-9.3v-50.4h9.3v18.4q3.4-5 10.7-5zm29.4 22.8q1.9 6.8 10.2 6.8 5.3 0 8-3.6l7.5 4.3q-5.3 7.7-15.7 7.7-8.9 0-14.3-5.4-5.4-5.4-5.4-13.6 0-8.1 5.3-13.5 5.4-5.5 13.7-5.5 7.9 0 13 5.5 5.2 5.4 5.2 13.5 0 1.8-0.3 3.8zm-0.2-7.2h18.4q-0.8-3.7-3.3-5.5-2.5-1.8-5.6-1.8-3.8 0-6.2 2-2.5 1.9-3.3 5.3zm85 21.4l-3-9.1h-20.1l-3 9.1h-10.8l17.7-50.4h12.3l17.7 50.4zm-20-18.4h13.9l-6.9-20.6zm68.9 18.4h-10.7l-7.8-10.9-7.8 10.9h-10.8l13.2-18.4-12.6-17.6h10.7l7.3 10.2 7.3-10.2h10.6l-12.6 17.6zm9.3-40.3q-2.3 0-4-1.7-1.7-1.7-1.7-4 0-2.3 1.7-4.1 1.7-1.7 4-1.7 2.4 0 4 1.7 1.7 1.8 1.7 4.1 0 2.3-1.7 4-1.6 1.7-4 1.7zm-4.6 40.3v-36h9.3v36zm26-25.8q0 1.4 1.9 2.4 2 0.8 4.7 1.6 2.7 0.6 5.5 1.7 2.7 1 4.6 3.4 1.9 2.5 1.9 6.2 0 5.5-4.2 8.5-4.1 3-10.3 3-11 0-15.1-8.6l8.1-4.5q1.6 4.7 7 4.7 5 0 5-3.1 0-1.5-1.9-2.3-1.9-1-4.6-1.7-2.8-0.7-5.5-1.8-2.7-1.1-4.7-3.4-1.9-2.4-1.9-5.9 0-5.3 3.9-8.3 4-3.1 9.8-3.1 4.4 0 8 2 3.6 1.9 5.7 5.6l-7.9 4.3q-1.8-3.7-5.8-3.7-1.8 0-3 0.8-1.2 0.8-1.2 2.2zm73.8-0.4q6.7 3.9 6.7 11.6 0 6.4-4.6 10.5-4.5 4.1-11.1 4.1h-21.4v-50.4h19.8q6.5 0 10.9 4 4.5 4 4.5 10.2 0 6.2-4.8 10zm-10.6-14.9h-9.9v11.1h9.9q2.3 0 3.9-1.6 1.5-1.6 1.5-4 0-2.4-1.5-4-1.5-1.5-3.9-1.5zm1.6 31.8q2.5 0 4.1-1.7 1.7-1.7 1.7-4.3 0-2.5-1.7-4.2-1.6-1.7-4.1-1.7h-11.5v11.9zm21.8 9.3v-52.6h9.3v52.6zm48.4-4.5q-5.5 5.5-13.5 5.5-8 0-13.5-5.5-5.5-5.5-5.5-13.5 0-8 5.5-13.5 5.5-5.5 13.5-5.5 8 0 13.5 5.5 5.6 5.5 5.6 13.5 0 8-5.6 13.5zm-20.5-6.4q2.8 2.8 7 2.8 4.2 0 7-2.8 2.8-2.8 2.8-7.1 0-4.3-2.8-7.2-2.8-2.8-7-2.8-4.2 0-7 2.8-2.7 2.9-2.7 7.2 0 4.3 2.7 7.1zm49.7 11.9q-8.1 0-13.6-5.5-5.4-5.5-5.4-13.5 0-8.1 5.4-13.6 5.5-5.4 13.6-5.4 5.3 0 9.6 2.5 4.3 2.5 6.6 6.8l-8 4.6q-1.1-2.2-3.3-3.5-2.2-1.3-4.9-1.3-4.2 0-6.9 2.8-2.8 2.8-2.8 7.1 0 4.2 2.8 7 2.7 2.8 6.9 2.8 2.8 0 4.9-1.3 2.3-1.3 3.4-3.5l8 4.6q-2.4 4.3-6.7 6.9-4.3 2.5-9.6 2.5zm54.4-1h-10.8l-13.1-16.4v16.4h-9.3v-50.4h9.3v30.2l12.4-15.8h11.1l-14.5 17.8zm33-9.5h21.3v9.5h-31.2v-50.4h30.8v9.5h-20.9v10.7h19.1v9.4h-19.1zm61 9.5h-10.7l-7.8-11-7.8 11h-10.8l13.2-18.4-12.6-17.6h10.8l7.2 10.1 7.3-10.1h10.7l-12.6 17.5zm25.5-37q7.3 0 12.4 5.6 5.2 5.4 5.2 13.4 0 8-5.2 13.6-5.1 5.4-12.4 5.4-7.5 0-11.6-5.2v18.6h-9.3v-50.4h9.3v4.3q4.1-5.3 11.6-5.3zm-8.8 26.4q2.8 2.8 7.1 2.8 4.3 0 7.1-2.8 2.9-2.9 2.9-7.4 0-4.4-2.9-7.2-2.8-2.9-7.1-2.9-4.3 0-7.1 2.9-2.8 2.8-2.8 7.2 0 4.5 2.8 7.4zm33 10.6v-52.5h9.2v52.5zm48.5-4.4q-5.5 5.4-13.5 5.4-8 0-13.6-5.4-5.4-5.6-5.4-13.6 0-8 5.4-13.4 5.6-5.6 13.6-5.6 8 0 13.5 5.6 5.6 5.4 5.6 13.4 0 8-5.6 13.6zm-20.5-6.4q2.8 2.8 7 2.8 4.1 0 7-2.8 2.8-2.9 2.8-7.2 0-4.3-2.8-7.1-2.9-2.8-7-2.8-4.2 0-7 2.8-2.7 2.8-2.7 7.1 0 4.3 2.7 7.2zm41.9-19q1.3-3.4 4.2-5.2 3-1.7 6.7-1.7v10.4q-4.2-0.5-7.6 1.7-3.3 2.2-3.3 7.4v17.2h-9.3v-36h9.3zm22.9 15.6q1.8 6.8 10.1 6.8 5.3 0 8.1-3.6l7.5 4.3q-5.4 7.7-15.7 7.7-9 0-14.4-5.4-5.4-5.4-5.4-13.6 0-8.1 5.4-13.5 5.3-5.5 13.7-5.5 7.9 0 13 5.5 5.2 5.5 5.2 13.5 0 1.8-0.4 3.8zm-0.1-7.2h18.3q-0.8-3.6-3.3-5.4-2.4-1.8-5.6-1.8-3.7 0-6.2 1.9-2.4 1.9-3.2 5.3zm43.4-8.4q1.3-3.4 4.2-5.2 3.1-1.7 6.7-1.7v10.4q-4.2-0.5-7.6 1.7-3.3 2.2-3.3 7.4v17.2h-9.3v-36h9.3z"/>
                <use href="#img1" x="15" y="40"/>
            </svg>
            <div class="search-panel">
                <f-search-box></f-search-box>
            </div>
            
        </div>
        <f-card class="home-block" hover>
            <div class="row row-2-cols-lg" style="width:100%; border: 1px solid #eee">
                <div class="col">
                    <div class="home-item border-bottom border-right" >
                        <div class="icon">
                            <img width="36" height="36" src="/logo.svg" alt="">
                        </div>
                        <div>
                            <small>Axis Price</small>
                            <p>${{ price }} <span class="text-danger">(-2.07%)</span></p>
                        </div>
                    </div>

                    <div class="home-item border-right">
                        <div class="icon">
                            <icon data="@/assets/svg/icon-market-cap.svg" width="28" height="28" style="fill:none;stroke:currentColor" />
                        </div>
                        <div>
                            <small>Market cap</small>
                            <p>${{ price * 150000000  }}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div style="display:flex;flex-direction: row;">
                        <div class="home-item border-bottom w50">
                            <div class="icon">
                                <icon data="@/assets/svg/icon-transations.svg"  width="20" height="20" style="fill:none;stroke:currentColor" />
                            </div>
                            <div>
                                <small>Transactions</small>
                                <p><animated-number
                                    :value="chainState.transactions | formatHexToInt"
                                    :formatValue="formatNum"
                                    :duration="numAnimationDuration"
                                /></p>
                            </div>
                        </div>
                        <div class="home-item border-bottom w50">
                            <div>
                                <small>Med Gas Price</small>
                                <p>{{ Number((gasPrice/1e9).toFixed(6)) }} Gwei</p>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction: row;">
                        <div class="home-item w50">
                            <div class="icon">
                                <icon data="@/assets/svg/icon-latest.svg" width="20" height="20" style="fill:none;stroke:currentColor" />
                            </div>
                            <div>
                                <small class="muted text-uppercase blue-grey-color">Latest Block</small>
                                <p><animated-number
                                    :value="chainState.blocks | formatHexToInt"
                                    :formatValue="formatNum"
                                    :duration="numAnimationDuration"
                                /></p>
                            </div>
                        </div>
                        <div class="home-item w50">
                            <div>
                                <small class="muted text-uppercase blue-grey-color">Validators</small>
                                <p><animated-number
                                :value="chainState.validators | formatHexToInt"
                                :formatValue="formatNum"
                                :duration="numAnimationDuration"
                            /> <span class="blue-grey-color">(validators)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="txvolumes_label">
                        <f-listbox v-model="txVolumesResolution" :focus-item-on-focus="true" :data="txVolumesResolutions" labeled-by="txv" horizontal />
                    </div>
                    <transaction-volumes :resolution="txVolumesResolution" />
                </div>
            </div>
        </f-card>

        <!-- <div class="row row-2-cols-lg no-collapse equal-height">
            <div class="col">
                <router-link :to="{name: 'blocks'}" class="no-effect">
                    <f-card class="home-block" hover>
                        <h2 class="h3">{{ $t('view_home.blocks') }} <icon data="@/assets/svg/angle-right.svg" color="#999"></icon></h2>
                        <div class="num">
                            <animated-number
                                :value="chainState.blocks | formatHexToInt"
                                :formatValue="formatNum"
                                :duration="numAnimationDuration"
                            />
                        </div>
                    </f-card>
                </router-link>
            </div>
            <div class="col">
                <router-link :to="{name: 'staking'}" class="no-effect">
                    <f-card class="home-block" hover>
                        <h2 class="h3">{{ $t('view_home.validators') }} <icon data="@/assets/svg/angle-right.svg" color="#999"></icon></h2>
                        <div class="num">
                            <animated-number
                                :value="chainState.validators | formatHexToInt"
                                :formatValue="formatNum"
                                :duration="numAnimationDuration"
                            />
                        </div>
                    </f-card>
                </router-link>
            </div>
            <div class="col">
                <f-card class="home-block">
                    <h2 class="h3">{{ $t('view_home.accounts') }}</h2>
                    <div class="num">
                        <animated-number
                            :value="chainState.accounts | formatHexToInt"
                            :formatValue="formatNum"
                            :duration="numAnimationDuration"
                        />
                    </div>
                </f-card>
            </div>
            <div class="col">
                <router-link :to="{name: 'transactions'}" class="no-effect">
                    <f-card class="home-block" hover>
                        <h2 class="h3">{{ $t('view_home.transactions') }} <icon data="@/assets/svg/angle-right.svg" color="#999"></icon></h2>
                        <div class="num">
                            <animated-number
                                :value="chainState.transactions | formatHexToInt"
                                :formatValue="formatNum"
                                :duration="numAnimationDuration"
                            />
                        </div>
                    </f-card>
                </router-link>
            </div>
        </div> -->
        <div class="row row-2-cols-lg equal-height mat-5">
            <div class="col">
                <f-card class="half-padding">
                    <h2 class="h3">Latest Blocks</h2>
                    <home-block-list :items="blocksData" :hidden-columns="['time']" :items-per-page="10" class="home-table" />
                    <router-link :to="{name: 'blocks'}" class="btn small secondary" style="width: 100%;">
                        View all blocks
                    </router-link>
                </f-card>
            </div>
            <div class="col">
                <f-card class="half-padding">
                    <h2 class="h3">Latest Transactions</h2>
                    <home-transaction-list :items="blocksData" :hidden-columns="['gasUsed']" :items-per-page="5" class="home-table" />
                    <router-link :to="{name: 'transactions'}" class="btn small secondary" style="width: 100%;">
                        View all transactions
                    </router-link>
                </f-card>
            </div>
        </div>
        <!-- <div class="row equal-height mat-5">
            <div class="col">
                <f-card class="half-padding">
                    <div class="txvolumes_label">
                        <h2 class="h3" id="txv">Daily Transactions</h2>
                        <f-listbox v-model="txVolumesResolution" :focus-item-on-focus="true" :data="txVolumesResolutions" labeled-by="txv" horizontal />
                    </div>
                    <transaction-volumes :resolution="txVolumesResolution" />
                </f-card>
            </div>
        </div> -->
    </div>
</template>

<script>
    import config from '../../app.config'
    import FCard from "../components/core/FCard/FCard.vue";
    import FSearchBox from "../components/FSearchBox.vue";
    import gql from 'graphql-tag';
    import HomeBlockList from "@/data-tables/HomeBlockList.vue";
    import HomeTransactionList from "@/data-tables/HomeTransactionList.vue";
    import AnimatedNumber from "animated-number-vue";
    import {pollingMixin} from "@/mixins/polling.js";
    import TransactionVolumes from "@/components/TransactionVolumesChart.vue";
    import FListbox from "@/components/core/FListbox/FListbox.vue";
    import {formatNumberByLocale} from "@/filters.js";

    export default {
        mixins: [pollingMixin],

        components: {
            FListbox,
            TransactionVolumes,
            HomeTransactionList,
            HomeBlockList,
            FCard,
            FSearchBox,
            AnimatedNumber,
        },

        data() {
            return {
                blocksData: [],
                txVolumesResolution: '1m',
                txVolumesResolutions: [
                    {
                        label: '2 Weeks',
                        value: '14d',
                    },
                    {
                        label: '1 Month',
                        value: '1m',
                    },
                    {
                        label: '3 Months',
                        value: '3m',
                    },
                ],
                numAnimationDuration: 750,
                chainState: {
                    blocks: 0,
                    validators: 0,
                    accounts: 0,
                    transactions: 0,
                },
                symbol: config.symbol,
                chartData: {
                    labels: ['Jan 17', 'Jan 24', 'Jan 31', 'Jan 17', 'Jan 24', 'Jan 31'],
                    series: [
                        [500, 200, 1200, 1300, 1000, 1400]
                    ]
                },
                chartOptions: {fullWidth: true, height: "120px", low: 0, showArea: false},
                price: 0.2,
                gasPrice: this.gasPrice || 1500000000
            }
        },

        created() {
            this.updateChainState();
        },

        mounted() {
            this._polling.start(
                'update-net-state',
                () => {
                    this.updateChainState();
                },
                3300
            );
        },

        methods: {
            async updateChainState() {
                this.chainState = {...await this.fetchState()};

            },

            /**
             * @returns {Promise<Object>}
             */
            async fetchState() {
                const data = await this.$apollo.query({
                    query: gql`
                        query State {
                            state {
                                blocks
                                transactions
                                accounts
                                validators
                                sfcLockingEnabled
                                sealedEpoch {
                                    id
                                    totalSupply
                                    baseRewardPerSecond
                                }
                            }
                        }
                    `,
                    fetchPolicy: 'network-only',
                });

                return data.data.state || {};
            },

            formatNum(_num) {
                return formatNumberByLocale(parseInt(_num), 0);
            }
        }
    }
</script>

<style lang="scss">
    .view-home {
        .f-search-box {
            width: 100%;
            padding: 8px 0 40px 0;
        }

        .home-block {
            --f-card-padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;

            min-height: 195px;

            h2 {
                text-align: center;
                //margin-top: 16px;
                margin-bottom: 4px;
            }

            .num {
                text-align: center;
                font-weight: bold;
                font-size: 38px;
            }
        }

        .home-table {
            margin-bottom: 16px;
            height: 300px;
        }

        .txvolumes_label {
            display: flex;
            flex-wrap: wrap;
            //gap: 16px;
            align-items: center;
            margin-bottom: 4px;

            h2 {
                margin-bottom: 0;
                padding-inline-end: 16px;
            }
        }
    }

    @include media-max($bp-menu) {
        .view-home {
            .f-search-box {
                padding: 32px 0;
            }
        }
    }
    
    .s2 { fill: none;stroke: #4d85df } 
    .s3 { fill: none;stroke: #4d85df;stroke-width: 1 }
    .search-panel {
        position:absolute; width:60%; left: 20%; right: 20%; top:60%
    }

    @include media-max($bp-small) {
        .view-home {
            .home-block {
                min-height: 136px;

                h2 {
                    font-size: $fs16;
                }

                .num {
                    font-size: 28px;
                }
            }

            .txvolumes_label {
                //font-size: 14px;
                h2 {
                    margin-bottom: 8px;
                }
            }
        }
        .search-panel {
            width:100%;
            left: 0;
            right: 0;
        }
    }

    .home-item {
        display:flex; 
        align-items: center; 
        padding: 0.5em;
    }
    .border-right {
        border-right: 1px solid #eee
    }
    .border-bottom {
        border-bottom: 1px solid #eee
    }

    .icon {
        width:40px; padding-right: 10px;
    }
    .w50 {
        width: 50%;
    }
    @include media-max($bp-small) {
        .w50 {
            width: 100%;
        }
    }
</style>
