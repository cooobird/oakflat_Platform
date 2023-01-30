onEvent('recipes', event => {
   event.remove({output:'#tconstruct:guides'})//删除匠魂手册合成配方
   event.remove({output:'toughasnails:empty_canteen'})//删除空水袋合成配方
   event.remove({output:'tconstruct:smeltery_controller'})//删除冶炼炉控制器合成配方
   event.remove({output:'undead_expansion:hollow_spawner'})//删除空刷怪笼合成配方
   event.remove({output:'mythicbotany:mana_infuser'})//删除注魔板合成配方
   event.remove({output:'extrabotany:theorigin'})//删除起源物质所有合成配方
   event.remove({input:'extrabotany:theorigin'})//删除起源物质所有合成配方
   event.remove({output:'extrabotany:sinrune',input:'extrabotany:sinrune'})//删除大罪符文合成配方
   event.remove({output:'extrabotany:elementrune',input:'extrabotany:elementrune'})//删除元灵符文合成配方
   event.remove({output:'createsupercharged:creative_mechanism'})//删除创造构件配方
   event.remove({input:'minecraft:blaze_powder',output:'minecraft:ender_eye'})//删除末影之眼使用烈焰粉合成的配方
   event.remove({output:'create_stuff_additions:brass_portable_drill'})//删除黄铜便携式钻头合成配方
    })