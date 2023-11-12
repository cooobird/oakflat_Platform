onEvent('recipes', event => {
//修改《匠魂宝典：材料与你》合成配方
    event.shaped('1x tconstruct:materials_and_you',[
        'ppp',
        'pbp',
        'ppp'
    ],{
        p:'tconstruct:pattern',b:'minecraft:book'
    })
//修改《入门熔炼术》合成配方
    event.shapeless('1x tconstruct:puny_smelting',['tconstruct:materials_and_you','tconstruct:grout'])
//修改《大师熔炼术》合成配方
    event.shapeless('1x tconstruct:mighty_smelting',['tconstruct:puny_smelting','tconstruct:seared_bricks'])
//修改《奇异熔铸术》合成配方
    event.shapeless('1x tconstruct:fantastic_foundry',['tconstruct:mighty_smelting','tconstruct:nether_grout'])
//修改《工匠装置宝典》合成配方
    event.shapeless('1x tconstruct:tinkers_gadgetry',['tconstruct:materials_and_you','#forge:slime_balls'])
//修改《工匠大百科》合成配方
    event.shaped('1x tconstruct:encyclopedia',[
        'mp ',
        'if ',
        '   '
    ],{
        m:'tconstruct:materials_and_you',p:'tconstruct:puny_smelting',i:'tconstruct:mighty_smelting',f:'tconstruct:fantastic_foundry'
    })
//修改空水袋合成配方
    event.shaped('1x toughasnails:empty_canteen',[
        'rrr',
        'l l',
        'lll'
    ],{
        r:'farmersdelight:rope',l:'minecraft:leather'
    })
//修改注魔板合成配方
    event.shaped('1x mythicbotany:mana_infuser',[
        'eee',
        'rpu',
        'sfw'
    ],{
        e:'botania:elementium_ingot',r:'botania:rune_spring',p:'botania:terra_plate',u:'botania:rune_autumn',
        s:'botania:rune_summer',f:'mythicbotany:alfheim_rune',w:'botania:rune_winter'
    })
//奈布之锤合成配方
    event.shaped('atum:nebu_hammer',[
        'nn ',
        'ns ',
        ' s '
    ],{
        n:'atum:nebu_ingot',s:'minecraft:stick'
    })
//焦黑加热器合成配方
    event.shaped('tconstruct:seared_heater',[
        'sss',
        'sfs',
        'sss'
    ],{
        s:'tconstruct:seared_brick',f:'minecraft:furnace'
    })
//添加龙炎钢钢柸合成配方(半成品)
    event.recipes.createMixing(['kubejs:incomplete_dragonsteel_fire_billet'],['steampowered:steel_ingot','iceandfire:fire_dragon_blood']).superheated()
    event.recipes.createPressing(['kubejs:dragonsteel_fire_billet'],['kubejs:incomplete_dragonsteel_fire_billet'])
//添加龙霜钢钢柸合成配方(半成品)
    event.recipes.createMixing(['kubejs:incomplete_dragonsteel_ice_billet'],['steampowered:steel_ingot','iceandfire:ice_dragon_blood']).superheated()
    event.recipes.createPressing(['kubejs:dragonsteel_ice_billet'],['kubejs:incomplete_dragonsteel_ice_billet'])
//添加龙霆钢钢柸合成配方(半成品)
    event.recipes.createMixing(['kubejs:incomplete_dragonsteel_lightning_billet'],['steampowered:steel_ingot','iceandfire:lightning_dragon_blood']).superheated()
    event.recipes.createPressing(['kubejs:dragonsteel_lightning_billet'],['kubejs:incomplete_dragonsteel_lightning_billet'])
//添加龙魂罐合成配方
    event.shaped('1x kubejs:dragon_soul_pot',[
        ' m ',
        'g g',
        'ggg'
    ],{
        m:'#minecraft:slabs',g:'#forge:glass'
    })
//修改鳕鱼块及鲑鱼块合成配方
    event.shaped('1x architects_palette:salmon_log',[
        'ss ',
        'ss ',
        '   '
    ],{
        s:'minecraft:salmon'
    })
    event.shaped('1x architects_palette:cod_log',[
        'cc ',
        'cc ',
        '   '
    ],{
        c:'minecraft:cod'
    })
})  




    