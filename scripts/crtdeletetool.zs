import crafttweaker.api.villagers.VillagerTrades;
import crafttweaker.api.loot.conditions.LootConditionBuilder;
import crafttweaker.api.loot.modifiers.CommonLootModifiers;

loot.modifiers.register(
    "remove_resources_from_chests",
    LootConditionBuilder.create(),
    CommonLootModifiers.removeAll(<item:minecraft:golden_sword>,<item:minecraft:golden_pickaxe>,<item:minecraft:golden_axe>,
    <item:minecraft:golden_hoe>,<item:minecraft:golden_shovel>,<item:minecraft:bow>,<item:minecraft:crossbow>,<item:minecraft:stone_axe>,
    <item:minecraft:iron_sword>,<item:minecraft:iron_pickaxe>,<item:minecraft:iron_axe>,<item:minecraft:iron_shovel>,<item:minecraft:diamond_sword>,
    <item:minecraft:diamond_sword>,<item:minecraft:diamond_pickaxe>,<item:minecraft:diamond_hoe>,<item:minecraft:diamond_shovel>,<item:undead_expansion:rusty_sword>,
    <item:undead_expansion:rusty_pickaxe>,<item:undead_expansion:rusty_axe>,<item:undead_expansion:rusty_hoe>,<item:undead_expansion:rusty_shovel>)
);

// VillagerTrades.removeItemsForEmeraldsTrade(村民职业, 等级, 输出);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 1, <item:minecraft:stone_pickaxe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 1, <item:minecraft:stone_axe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 1, <item:minecraft:stone_hoe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 1, <item:minecraft:stone_shovel>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_sword>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:weaponsmith>, 1, <item:minecraft:iron_sword>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_pickaxe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_pickaxe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_axe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_axe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:weaponsmith>, 1, <item:minecraft:iron_axe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_shovel>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:iron_shovel>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 3, <item:minecraft:diamond_hoe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_sword>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 5, <item:minecraft:diamond_sword>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_pickaxe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 5, <item:minecraft:diamond_pickaxe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_axe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:weaponsmith>, 4, <item:minecraft:diamond_axe>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_axe>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_shovel>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:toolsmith>, 4, <item:minecraft:diamond_shovel>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:fletcher>, 2, <item:minecraft:bow>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:fletcher>, 4, <item:minecraft:bow>);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:fletcher>, 3, <item:minecraft:crossbow>);
villagerTrades.removeEnchantedItemForEmeraldsTrade(<profession:minecraft:fletcher>, 5, <item:minecraft:crossbow>);
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>,1);
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>,2);
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>,3);
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>,4);
villagerTrades.removeAllTrades(<profession:immersiveengineering:gunsmith>,5);
villagerTrades.removeItemsForEmeraldsTrade(<profession:minecraft:>)

<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/crystal_sword");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/crystal_pickaxe");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/crystal_axe");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/crystal_shovel");
<recipetype:astralsorcery:infusion>.removeRecipe(<item:astralsorcery:infused_crystal_sword>);
<recipetype:astralsorcery:infusion>.removeRecipe(<item:astralsorcery:infused_crystal_pickaxe>);
<recipetype:astralsorcery:infusion>.removeRecipe(<item:astralsorcery:infused_crystal_axe>);
<recipetype:astralsorcery:infusion>.removeRecipe(<item:astralsorcery:infused_crystal_shovel>);
<recipetype:mythicbotany:rune_ritual>.removeRecipe("mythicbotany:mythicbotany_rune_rituals/mjoellnir");
mods.iceandfire.DragonForge.removeRecipe("fire",<item:iceandfire:dragonsteel_fire_ingot>);
mods.iceandfire.DragonForge.removeRecipe("ice",<item:iceandfire:dragonsteel_ice_ingot>);
mods.iceandfire.DragonForge.removeRecipe("lightning",<item:iceandfire:dragonsteel_lightning_ingot>);

