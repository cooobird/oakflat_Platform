//修改起源物质合成配方
<recipetype:botania:runic_altar>.addRecipe("theorigin",<item:extrabotany:theorigin>,300000,
<item:elementalenhancement:agni_ingot>,<item:elementalenhancement:frost_ingot>,<item:elementalenhancement:earth_ingot>,
<item:elementalenhancement:gale_force_ingot>,<item:elementalenhancement:nature_ingot>,<item:elementalenhancement:heavy_water_ingot>,<item:kubejs:material_tar>);
//修改混沌物质合成配方
<recipetype:botania:runic_altar>.addRecipe("thechaos",<item:extrabotany:thechaos>,300000,
<item:extrabotany:shadowium>,<item:extrabotany:shadowium>,<item:extrabotany:shadowium>,<item:extrabotany:shadowium>,<item:extrabotany:shadowium>,
<item:extrabotany:photonium>,<item:extrabotany:photonium>,<item:extrabotany:photonium>,<item:extrabotany:photonium>,<item:extrabotany:photonium>,
<item:kubejs:material_tar>);
//修改终末物质合成配方

//修改宇宙之心合成配方

//修改大罪符文合成配方
<recipetype:botania:runic_altar>.addRecipe("sinrune",<item:extrabotany:sinrune>,50000,
<item:botania:rune_mana>,<item:botania:rune_lust>,<item:botania:rune_gluttony>,<item:botania:rune_greed>,
<item:botania:rune_sloth>,<item:botania:rune_wrath>,<item:botania:rune_envy>,<item:botania:rune_pride>
);
//修改元灵符文合成配方
<recipetype:botania:runic_altar>.addRecipe("elementrune",<item:extrabotany:elementrune>,50000,
<item:botania:rune_water>,<item:botania:rune_fire>,<item:botania:rune_air>,<item:botania:rune_earth>,
<item:botania:rune_spring>,<item:botania:rune_summer>,<item:botania:rune_autumn>,<item:botania:rune_winter>
);
//修改冶炼炉控制器合成配方
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("item_smeltery_controller",<item:tconstruct:seared_melter>,<fluid:tconstruct:molten_copper> * 1000,
<item:tconstruct:smeltery_controller>,400,true,false);
//修改彩虹苹果合成配方
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("rainbow_apple",<item:natureminerals:enchanted_thounite_apple>,<fluid:elementalenhancement:molten_rainbow> * 144,
<item:elementalenhancement:rainbow_apple>,800,true,false);
//修改冰与火三钢合成配方
mods.iceandfire.DragonForge.addRecipe("fire",<item:iceandfire:dragonsteel_fire_ingot>,<item:kubejs:dragonsteel_fire_billet>,<item:kubejs:soul_of_dragon_fire>);
mods.iceandfire.DragonForge.addRecipe("ice",<item:iceandfire:dragonsteel_ice_ingot>,<item:kubejs:dragonsteel_ice_billet>,<item:kubejs:soul_of_dragon_ice>);
mods.iceandfire.DragonForge.addRecipe("lightning",<item:iceandfire:dragonsteel_lightning_ingot>,<item:kubejs:dragonsteel_lightning_billet>,<item:kubejs:soul_of_dragon_lightning>);
//修改亚空间物质合金锭合成




