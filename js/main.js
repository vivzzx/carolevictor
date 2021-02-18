(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "2021-04-04T12:30:00-0300",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime();
          let distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Quantos dias faltam para o casamento?";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)

        var produtos = [
          {
            link:'https://www.magazineluiza.com.br/balanca-digital-eletronica-de-precisao-sf-400-ate-10kg-cozinha-jfz/p/ef363b26ca/ud/blco/',
            text:'Balança eletrônica de precisão', 
            price: '29,90',
            img:'https://a-static.mlcdn.com.br/618x463/balanca-digital-eletronica-de-precisao-sf-400-ate-10kg-cozinha-jfz/bellacasa/57/f888dc4a6604c3a3bf87cf568a4002ab.jpg'
          },
          { 
            link:'https://www.magazineluiza.com.br/kit-utensilios-bambu-com-10-pecas-a-casa/p/cb387a6c09/ud/cjtu/',
            text: 'Kit de utensílios de bambu',
            price:'59,90',
            img: 'https://a-static.mlcdn.com.br/618x463/kit-utensilios-bambu-com-10-pecas-a-casa/angeloni2/4179819/1cc18e3a2f6b12df9e9e68a93f57b767.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/kit-utensilios-de-cozinha-euro-home-inox-gadgets-4-pecas/p/221900000/ud/cjtu/',
            text: '(VENDIDO) Kit de utensílios de inox',
            price: '49,90',
            img: 'https://a-static.mlcdn.com.br/618x463/kit-utensilios-de-cozinha-euro-home-inox-gadgets-4-pecas/magazineluiza/221900000/de6be6cb8a1c7096571f5e2a9a6d9936.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/lixeira-basculante-inox-brilho-3l-a-casa/p/ge629163j1/ud/udli/',
            text: 'Lixeira basculante de inox',
            price: '49,00',
            img: 'https://a-static.mlcdn.com.br/618x463/lixeira-basculante-inox-brilho-3l-a-casa/angeloni2/4162320/58f7aef91b9fb4e6a435ee816b10073a.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/kit-lixeira-3l-c-escova-s-casanova/p/hb669hf97k/ud/udli/',
            text: 'Kit lixeira e escova',
            price: '69,99',
            img: 'https://a-static.mlcdn.com.br/618x463/kit-lixeira-3l-c-escova-s-casanova/ceccasaeconstrucao/1ba3c09ea467bf589e0cc318e3abf3c9/02a3575ebd74fa1de9c65f657b77f02b.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/kit-confeitaria-cupcake-forma-antiaderente-acessorios-bicos-macro/p/ef76gb3j4e/ud/utcf/',
            text: 'Kit Confeitaria Cupcake',
            price: '44,90',
            img: 'https://a-static.mlcdn.com.br/618x463/kit-confeitaria-cupcake-forma-antiaderente-acessorios-bicos-macro/shopmacrozao/9221713969/0068927f6a132ae566ed7ea0541f8054.jpg'
          },
          {
             link:'https://www.magazineluiza.com.br/sacos-para-lavar-roupas-delicadas-40-x-40-10-pecas-cia-das-capas/p/abf89ghaj3/ud/slro/',
            text: 'Sacos protetores para lavar roupa',
            price: '42,42',
            img: 'https://a-static.mlcdn.com.br/618x463/sacos-para-lavar-roupas-delicadas-40-x-40-10-pecas-cia-das-capas/ciadascapas/dac9f6a8de5511eabad34201ac18501e/3c489f23bae5aeb6d5c80e3ae52dd70d.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/jogo-toalhas-marrocos-4-pecas-mascavo-vivart/p/cf64a2d2k6/cm/joto/',
            text: '(VENDIDO) Jogo de Toalhas 4 peças',
            price: '119,90',
            img: 'https://a-static.mlcdn.com.br/618x463/jogo-toalhas-marrocos-4-pecas-mascavo-vivart/ecommhome/8233p/65f3e7d9d2989df6d3d99a6b9eb6db8f.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/lixeira-reciclavel-com-pedal-5l-casambiente-lixe002/p/224066300/ud/udli/',
            text: 'Lixeira reciclável com pedal',
            price: '69,90',
            img: 'https://a-static.mlcdn.com.br/618x463/lixeira-reciclavel-com-pedal-5l-casambiente-lixe002/magazineluiza/224066300/65e52e7b5788a039f9785b5daa93d8b0.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1753921787?pfm_carac=saladeira&pfm_index=17&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Saladeira em inox com pegadores',
            price: '55,70',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1753921/7/1753921795_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/153835252?chave=acproduct',
            text: 'Kit de potes de vidro com tampa',
            price: '67,42',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/153836/1/153836132_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/125281221?pfm_carac=pote&pfm_index=7&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Conjunto de potes inox com tampa',
            price: '19,35',
            img: 'https://images-americanas.b2w.io/produtos/01/00/item/125281/2/125281221_3GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1760507218?pfm_carac=potes-hermeticos&pfm_index=9&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Conjunto de 10 potes herméticos',
            price: '55,79',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1760507/2/1760507226_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/22576118?pfm_carac=%C3%BAltimos%20produtos%20vistos&pfm_index=4&pfm_pos=item_page.history&pfm_type=vit_recommendation&DCSext.recom=RR_item_page.history-RecentHistoricalItems&nm_origem=rec_item_page.history-RecentHistoricalItems&nm_ranking_rec=5',
            text: 'Conjunto de 6 potes quadrados',
            price: '13,94',
            img: 'https://images-americanas.b2w.io/produtos/01/00/oferta/22576/1/22576120_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/2057906891?pfm_carac=forma-de-bolo&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Assadeira de bolo antiaderente 22cm',
            price: '27,89',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/2057906/9/2057906903_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/7250854?pfm_carac=aproveite%20e%20veja%20tamb%C3%A9m&pfm_index=1&pfm_pos=&pfm_type=vit_recommendation&DCSext.recom=RR_item_page.rr1-ClickCP&nm_origem=rec_item_page.rr1-ClickCP&nm_ranking_rec=2',
            text: 'Conjunto de assadeiras antiaderente',
            price: '83,51',
            img: 'https://images-americanas.b2w.io/produtos/01/00/item/7250/8/7250854_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1703869677?pfm_carac=vassoura&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Vassoura com cabo',
            price: '13,94',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1703869/6/1703869685_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1687716506?pfm_carac=rodo&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Rodo com cabo',
            price: '15,80',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1687716/5/1687716514_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1978257848?pfm_carac=rodo&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: '(VENDIDO) Rodo mágico Mop com reservatório',
            price: '60,30',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1978257/8/1978257864_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1579187379?pfm_carac=escorredor-de-macarr-ao&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Escorredor de macarrão de silicone',
            price: '16,64',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1579187/3/1579187387_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/2021684173?pfm_carac=seca-salada&pfm_index=6&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Seca salada vermelho de plástico',
            price: '83,60',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/2021684/1/2021684181_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/133892399?pfm_carac=assadeira-em-vidro&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Conjunto de assadeiras em vidro com tampa',
            price: '119,99',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/133892/4/133892401_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/1555963901?pfm_carac=assadeira-em-vidro&pfm_index=19&pfm_page=search&pfm_pos=grid&pfm_type=search_page',
            text: 'Assadeira retangular em vidro',
            price: '55,24',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/1555963/9/1555963927_1GG.jpg'
          },
          {
            link:'https://www.americanas.com.br/produto/2772993840?pfm_carac=assadeira-em-vidro&pfm_page=search&pfm_pos=grid&pfm_type=search_page&cor=Transparente',
            text: 'Assadeira de vidro oval com tampa',
            price: '66,90',
            img: 'https://images-americanas.b2w.io/produtos/01/00/img/2772993/8/2772993866_1GG.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/prendedor-de-roupa-utimil-24-pecas-ep-359/p/218083700/ud/pdro/',
            text: 'Prendedor de roupas',
            price: '29,90',
            img: 'https://a-static.mlcdn.com.br/618x463/prendedor-de-roupa-utimil-24-pecas-ep-359/magazineluiza/218083700/de5950f218f4bb486b2a4e57e6adfb24.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/cesto-para-prendedor-de-roupas-cristal-sanremo/p/hk2adg28gb/ud/cero/',
            text: 'Cesto para prendedor de roupas',
            price: '12,90',
            img: 'https://a-static.mlcdn.com.br/618x463/cesto-para-prendedor-de-roupas-cristal-sanremo/telhanorte/1516736/f2f586af895b43ace81cbac567d1a12a.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/rodinho-de-pia-cozinha-alta-qualidade-rodo-seca-pia-ref-7778-plasutil/p/ed7e5ag3dj/ud/rdhp/',
            text: 'Rodinho de pia',
            price: '17,99',
            img: 'https://a-static.mlcdn.com.br/618x463/rodinho-de-pia-cozinha-alta-qualidade-rodo-seca-pia-ref-7778-plasutil/amplabrasil/7545957355/a848f1525c21d34d474b6bc46e6637b8.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/balde-plastico-sanremo-15l/p/fh8acb47hk/ud/blde/',
            text: 'Balde de plástico',
            price: '18,36',
            img: 'https://a-static.mlcdn.com.br/618x463/balde-plastico-sanremo-15l/lojasalljoy/9723087559/49ec02840cb686515af3229d3ff7b94b.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/garrafa-termica-invicta-galant-1l-pressao-cores-sortidas/p/gf614ekhh6/ud/gate/',
            text: 'Garrafa térmica',
            price: '32,90',
            img: 'https://a-static.mlcdn.com.br/618x463/garrafa-termica-invicta-galant-1l-pressao-cores-sortidas/efacil/1012680/0403d56e447dd7930fed56f1dcf0e0d2.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/kit-de-jogo-americano-com-6-un-folhas-imprimindo-tudo/p/ebf85686ba/ud/joam/',
            text: 'Kit Jogo Americano',
            price: '44,91',
            img: 'https://a-static.mlcdn.com.br/618x463/kit-de-jogo-americano-com-6-un-folhas-imprimindo-tudo/imprimindotudobureau/304f6adabfee11eab4824201ac18501e/dfce71b833fd91a3c4b2559822dc82fd.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/conjunto-para-frios-3-pecas-atina-brinox/p/7246287/ud/pofr/',
            text: '(VENDIDO) Conjunto para frios',
            price: '42,90',
            img: 'https://a-static.mlcdn.com.br/618x463/conjunto-para-frios-3-pecas-atina-brinox/redesolarmoveis/687/e543ebcaacdc6fd9f31f1604322172ac.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/luva-termica-para-forno-altas-temperaturas-vermelha-wincy/p/jb1e1jhkhc/ud/luud/',
            text: 'Luva térmica',
            price: '24,90',
            img: 'https://a-static.mlcdn.com.br/618x463/luva-termica-para-forno-altas-temperaturas-vermelha-wincy/casanuvem/8395768901/9587e165a019538e8e083cc5debd2b3b.jpg'
          },
          {
            link:'https://www.magazineluiza.com.br/pano-de-chao-microfibra-condor-oferta/p/aj09aga5g6/me/pano/',
            text: 'Pano de chão de microfibra',
            price: '8,59',
            img: 'https://a-static.mlcdn.com.br/618x463/pano-de-chao-microfibra-condor-oferta/supralimpa/e2e2bbbe2b6111eb98b44201ac18503b/bd45740f7567cf3a38d6feb93b83d63a.jpg'
          },
        ]
        var shop = document.getElementById('shop');
        produtos.map(function(item) {
          //console.log(item)
          shop.innerHTML += `<div class="card tiles" style="width: 18rem;">
          <img src="${item.img}" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column h-100 justify-content-end">
            <h5 class="card-title">${item.text}</h5>
            <p class="card-text">R$ ${item.price}</p>
            <a href="${item.link}" class="btn btn-outline-success" target="_blank">Comprar</a>
          </div>
        </div>`
          
          item.link;
        });
    }());