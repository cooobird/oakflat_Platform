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

    event.recipes.createMechanicalCrafting('creativemod:maxemirite_ingot',[
        "D",
    ],{
        D: Item.of('ironshulkerbox:obsidian_shulker_box_black', 
        '{BlockEntityTag:{Items:[{Slot:0b,id:"minecraft:diamond",Count:1b},{Slot:1b,id:"minecraft:iron_ingot",Count:1b},{Slot:2b,id:"minecraft:gold_ingot",Count:1b},{Slot:3b,id:"minecraft:netherite_ingot",Count:1b},{Slot:4b,id:"minecraft:emerald",Count:1b},{Slot:5b,id:"natureminerals:uvarovite_ingot",Count:1b},{Slot:6b,id:"natureminerals:kunzite_ingot",Count:1b},{Slot:7b,id:"natureminerals:stibnite_ingot",Count:1b},{Slot:8b,id:"natureminerals:astrite_ingot",Count:1b},{Slot:9b,id:"natureminerals:thounite_ingot",Count:1b},{Slot:10b,id:"naturesaura:infused_iron",Count:1b},{Slot:11b,id:"naturesaura:sky_ingot",Count:1b},{Slot:12b,id:"extrabotany:orichalcos",Count:1b},{Slot:13b,id:"extrabotany:photonium",Count:1b},{Slot:14b,id:"extrabotany:shadowium",Count:1b},{Slot:15b,id:"extrabotany:aerialite",Count:1b},{Slot:16b,id:"steampowered:cast_iron_ingot",Count:1b},{Slot:17b,id:"steampowered:steel_ingot",Count:1b},{Slot:18b,id:"occultism:silver_ingot",Count:1b},{Slot:19b,id:"occultism:iesnium_ingot",Count:1b},{Slot:20b,id:"iceandfire:dragonsteel_fire_ingot",Count:1b},{Slot:21b,id:"iceandfire:dragonsteel_ice_ingot",Count:1b},{Slot:22b,id:"iceandfire:dragonsteel_lightning_ingot",Count:1b},{Slot:23b,id:"iceandfire:ghost_ingot",Count:1b},{Slot:24b,id:"atum:nebu_ingot",Count:1b},{Slot:25b,id:"mekanism:ingot_bronze",Count:1b},{Slot:26b,id:"mekanism:ingot_refined_obsidian",Count:1b},{Slot:27b,id:"mekanism:ingot_refined_glowstone",Count:1b},{Slot:28b,id:"mekanism:ingot_steel",Count:1b},{Slot:29b,id:"mekanism:ingot_osmium",Count:1b},{Slot:30b,id:"mekanism:ingot_tin",Count:1b},{Slot:31b,id:"mekanism:ingot_lead",Count:1b},{Slot:32b,id:"mekanism:ingot_uranium",Count:1b},{Slot:33b,id:"endrem:end_crystal_ingot",Count:1b},{Slot:34b,id:"cataclysm:ignitium_ingot",Count:1b},{Slot:35b,id:"allthemodium:allthemodium_ingot",Count:1b},{Slot:36b,id:"allthemodium:unobtainium_ingot",Count:1b},{Slot:37b,id:"allthemodium:vibranium_ingot",Count:1b},{Slot:38b,id:"allthemodium:unobtainium_allthemodium_alloy_ingot",Count:1b},{Slot:39b,id:"allthemodium:unobtainium_vibranium_alloy_ingot",Count:1b},{Slot:40b,id:"allthemodium:vibranium_allthemodium_alloy_ingot",Count:1b},{Slot:41b,id:"create:zinc_ingot",Count:1b},{Slot:42b,id:"create:brass_ingot",Count:1b},{Slot:43b,id:"immersiveengineering:ingot_nickel",Count:1b},{Slot:44b,id:"immersiveengineering:ingot_constantan",Count:1b},{Slot:45b,id:"immersiveengineering:ingot_electrum",Count:1b},{Slot:46b,id:"immersiveengineering:ingot_hop_graphite",Count:1b},{Slot:47b,id:"tdelight:hamletite_ingot",Count:1b},{Slot:48b,id:"tdelight:rosenquartz_ingot",Count:1b},{Slot:49b,id:"tdelight:gildedfern_ingot",Count:1b},{Slot:50b,id:"tconstruct:copper_ingot",Count:1b},{Slot:51b,id:"tconstruct:cobalt_ingot",Count:1b},{Slot:52b,id:"tconstruct:tinkers_bronze_ingot",Count:1b},{Slot:53b,id:"tconstruct:rose_gold_ingot",Count:1b},{Slot:54b,id:"tconstruct:pig_iron_ingot",Count:1b},{Slot:55b,id:"tconstruct:queens_slime_ingot",Count:1b},{Slot:56b,id:"tconstruct:manyullyn_ingot",Count:1b},{Slot:57b,id:"tconstruct:hepatizon_ingot",Count:1b},{Slot:58b,id:"materialis:fairy_ingot",Count:1b},{Slot:59b,id:"mythicbotany:alfsteel_ingot",Count:1b},{Slot:60b,id:"mythicbotany:alfsteel_armor_upgrade",Count:1b},{Slot:61b,id:"betterendforge:aeternium_ingot",Count:1b},{Slot:62b,id:"betterendforge:thallasium_ingot",Count:1b},{Slot:63b,id:"betterendforge:terminite_ingot",Count:1b},{Slot:64b,id:"elementalenhancement:rainbow_ingot",Count:1b},{Slot:65b,id:"elementalenhancement:agni_ingot",Count:1b},{Slot:66b,id:"elementalenhancement:frost_ingot",Count:1b},{Slot:67b,id:"elementalenhancement:earth_ingot",Count:1b},{Slot:68b,id:"elementalenhancement:gale_force_ingot",Count:1b},{Slot:69b,id:"elementalenhancement:nature_ingot",Count:1b},{Slot:70b,id:"elementalenhancement:heavy_water_ingot",Count:1b},{Slot:71b,id:"astralsorcery:starmetal_ingot",Count:1b},{Slot:72b,id:"stalwart_dungeons:tungsten_ingot",Count:1b},{Slot:73b,id:"pneumaticcraft:ingot_iron_compressed",Count:1b},{Slot:74b,id:"tinkers_reforged:aluminum_ingot",Count:1b},{Slot:75b,id:"tinkers_reforged:duralumin_ingot",Count:1b},{Slot:76b,id:"tinkers_reforged:gausum_ingot",Count:1b},{Slot:77b,id:"tinkers_reforged:electrical_copper_ingot",Count:1b},{Slot:78b,id:"tinkers_reforged:lavium_ingot",Count:1b},{Slot:79b,id:"tinkers_reforged:qivium_ingot",Count:1b},{Slot:80b,id:"botania:manasteel_ingot",Count:1b},{Slot:81b,id:"botania:terrasteel_ingot",Count:1b},{Slot:82b,id:"botania:elementium_ingot",Count:1b},{Slot:83b,id:"botania:gaia_ingot",Count:1b},{Slot:84b,id:"creativemod:maxemirite_ingot",Count:1b},{Slot:85b,id:"boss_tools:desh_ingot",Count:1b},{Slot:86b,id:"boss_tools:silicon_ingot",Count:1b},{Slot:87b,id:"byg:pendorite_ingot",Count:1b}],id:"ironchest:crystal_chest"},display:{Lore:[\'"(+NBT)"\']}}'),
    })
//获取材料潜影盒
    
}) 



    