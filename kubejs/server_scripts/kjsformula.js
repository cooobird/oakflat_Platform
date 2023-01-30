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
})
