onEvent("lootjs", (event) => {
    event//删除短弓掉落
        .addEntityLootModifier("atum:nomad")
        .thenRemove('atum:short_bow')
    event//删除炼狱锻锤掉落
        .addEntityLootModifier("cataclysm:netherite_monstrosity")
        .thenRemove('cataclysm:infernal_forge')
    event//删除剧毒匕首掉落
        .addEntityLootModifier("atum:assassin")
        .thenRemove('atum:dagger_poison') 
    event//删除铁制弯刀掉落
        .addEntityLootModifier("atum:brigand")
        .thenRemove('atum:iron_scimitar')    
    event//删除铁制巨剑掉落
        .addEntityLootModifier("atum:barbarian")
        .thenRemove('atum:iron_greatsword')
    event//删除铁制巨剑掉落
        .addBlockLootModifier("atum:palm_crate")
        .thenRemove('atum:iron_greatsword')
    event//删除铁制巨剑掉落
        .addBlockLootModifier("atum:deadwood_crate")
        .thenRemove('atum:iron_greatsword')
    event//删除铁制棍棒掉落
        .addBlockLootModifier("atum:palm_crate")
        .thenRemove('atum:iron_club')
    event//删除铁制棍棒掉落
        .addBlockLootModifier("atum:deadwood_crate")
        .thenRemove('atum:iron_club')
    event//删除铁制卡佩许剑掉落
        .addBlockLootModifier("atum:palm_crate")
        .thenRemove('atum:iron_khopesh')
    event//删除铁制卡佩许剑掉落
        .addBlockLootModifier("atum:deadwood_crate")
        .thenRemove('atum:iron_khopesh')
    event//删除僵尸的手臂掉落
        .addEntityLootModifier("minecraft:zombie")
        .thenRemove('undead_expansion:rotting_arm')
    event//删除守卫者护手掉落
        .addEntityLootModifier("cataclysm:ender_guardian")
        .thenRemove('cataclysm:gauntlet_of_guard')
    event//删除骏鹰利爪掉落
        .addEntityLootModifier("iceandfire:hippogryph")
        .thenRemove('iceandfire:hippogryph_talon')
    event//删除食人妖大斧掉落
        .addEntityLootModifier("iceandfire:troll")
        .thenRemove('iceandfire:troll_weapon_axe')
    event//删除铁傀儡掉落铁锭
        .addEntityLootModifier("minecraft:iron_golem")
        .thenRemove('minecraft:iron_ingot')
});
