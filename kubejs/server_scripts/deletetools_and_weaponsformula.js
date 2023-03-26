onEvent('recipes', event => {
    event.remove({output:/.*hammer/,not:{mod:"tconstruct"}})
    event.remove({output:/.*pickaxe/,not:{mod:"tconstruct"}})
    event.remove({output:/.*axe/,not:{mod:"tconstruct"}})
    event.remove({output:/.*sword/,not:{mod:"tconstruct"}})
    event.remove({output:/.*hoe/,not:{mod:"tconstruct"}})
    event.remove({output:/.*shovel/,not:{mod:"tconstruct"}})
    event.remove({output:/.*pick/,not:{mod:"tconstruct"}})
    event.remove({output:/.*paxel/,not:{mod:"tconstruct"}})
    event.remove({output:/.*bow/,not:{mod:"tconstruct"}})
    event.remove({output:/.*mattock/,not:{mod:"tconstruct"}})
    event.remove({output:/.*ammo.*/})
    event.remove({output:'create_stuff_additions:blazing_cleaver'})
    event.remove({output:'createsupercharged:creative_rose_glow_saber'})
    event.remove({output:'createsupercharged:creative_rose_glowpick'})
    event.remove({output:'cataclysm:the_incinerator'})
    event.remove({output:'extrabotany:shadowkatana'})
    event.remove({output:'extrabotany:excaliber'})
    event.remove({output:'extrabotany:failnaught'})
    event.remove({output:'extrabotany:firstfractal'})
    event.remove({output:'atum:stoneguard_greatsword'})
    event.remove({output:'atum:stoneguard_club'})
    event.remove({output:'atum:stoneguard_khopesh'})
    event.remove({output:'undead_expansion:hf_murasama_blade'})
    event.remove({output:'undead_expansion:grave_scythe'})
    event.remove({output:'shretnether:speed_claws'})
    event.remove({output:'shretnether:blood_cleaver'})
    event.remove({output:'shretnether:netherite_leech_mace'})
    event.remove({output:'notreepunching:macuahuitl'})
    event.remove({output:'notreepunching:iron_knife'})
    event.remove({output:'notreepunching:gold_knife'})
    event.remove({output:'notreepunching:diamond_knife'})
    event.remove({output:'notreepunching:netherite_knife'})
    event.remove({output:'notreepunching:gold_saw'})
    event.remove({output:'notreepunching:diamond_saw'})
    event.remove({output:'notreepunching:netherite_saw'})
    event.remove({output:'occultism:butcher_knife'})
    event.remove({output:'stalwart_dungeons:awful_dagger'})
    event.remove({output:'betterendforge:leather_wrapped_stick'})
    event.remove({output:'dreadsteel:dreadsteel_scythe'})
    event.remove({output:'pneumaticcraft:minigun'})
    event.remove({output:'extrabotany:silverbullet'})
    event.remove({output:'create_stuff_additions:blaze_flame_thrower'})
    event.remove({output:'create:potato_cannon'})
    event.remove({output:'minecraft:trident'})
    event.remove({output:'iceandfire:tide_trident'})
    event.remove({output:'immersiveengineering:sword_steel'})
    event.remove({output:'immersiveengineering:pickaxe_steel'})
    event.remove({output:'immersiveengineering:axe_steel'})
    event.remove({output:'immersiveengineering:hoe_steel'})
    event.remove({output:'immersiveengineering:shovel_steel'})
    event.remove({output:'immersiveengineering:railgun'})
    event.remove({output:'immersiveengineering:revolver'})
    event.remove({output:'immersiveengineering:speedloader'})
    event.remove({output:'immersiveengineering:gunpart_drum'})
    event.remove({output:'immersiveengineering:gunpart_barrel'})
    event.remove({output:'immersiveengineering:gunpart_hammer'})
    event.remove({output:'undead_expansion:impact_grenade'})
    event.remove({output:'pneumaticcraft:micromissiles'})
    event.remove({output:'immersiveengineering:empty_casing'})
    event.remove({output:'immersiveengineering:potion'})
    event.remove({output:'immersiveengineering:dragons_breath'})
    event.remove({output:'immersiveengineering:silver'})
    event.remove({output:'immersiveengineering:he'})
    event.remove({output:'immersiveengineering:empty_shell'})
    event.remove({output:'immersiveengineering:casull'})
    event.remove({output:'immersiveengineering:armor_piercing'})
    event.remove({output:'immersiveengineering:buckshot'})
    event.remove({output:'immersiveengineering:wolfpack'})
    event.remove({output:'immersiveengineering:homing'})
    event.remove({output:'immersiveengineering:firework'})
    event.remove({input:'immersiveengineering:flare'})
    event.remove({output:'immersiveengineering:mold_bullet_casing'})
    event.remove({output:'immersiveengineering:chemthrower'})
    event.remove({output:'immersiveengineering:toolupgrade_revolver_magazine'})
    event.remove({output:'immersiveengineering:turret_gun'})
    event.remove({output:'immersiveengineering:turret_chem'})
    event.remove({output:Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}')})
})
