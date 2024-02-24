let DeleteToolandWeapon = [/.*arrow'/,/.*hammer/,/.*pickaxe/,/.*axe/,/.*sword/,/.*hoe/,/.*shovel/,/.*pick/,/.*paxel/,/.*bow/,/.*mattock/,/.*ammo.*/,
'create_stuff_additions:blazing_cleaver','createsupercharged:creative_rose_glow_saber','createsupercharged:creative_rose_glowpick','cataclysm:the_incinerator',
'extrabotany:shadowkatana','extrabotany:excaliber','extrabotany:failnaught','extrabotany:firstfractal','atum:stoneguard_greatsword',
'atum:stoneguard_club','atum:stoneguard_khopesh','undead_expansion:hf_murasama_blade','undead_expansion:grave_scythe','shretnether:speed_claws',
'shretnether:blood_cleaver','shretnether:netherite_leech_mace','natural-progression:bone_knife','natural-progression:basic_saw',
'natural-progression:golden_saw','natural-progression:diamond_saw','natural-progression:netherite_saw','natural-progression:copper_saw',
'natural-progression:bronze_saw','natural-progression:steel_saw','occultism:butcher_knife','stalwart_dungeons:awful_dagger',
'betterendforge:leather_wrapped_stick','dreadsteel:dreadsteel_scythe','pneumaticcraft:minigun','extrabotany:silverbullet','create_stuff_additions:blaze_flame_thrower',
'create:potato_cannon','minecraft:trident','iceandfire:tide_trident','immersiveengineering:sword_steel','immersiveengineering:pickaxe_steel',
'immersiveengineering:axe_steel','immersiveengineering:hoe_steel','immersiveengineering:shovel_steel','immersiveengineering:railgun',
'immersiveengineering:revolver','immersiveengineering:speedloader','immersiveengineering:gunpart_drum','immersiveengineering:gunpart_barrel',
'immersiveengineering:gunpart_hammer','undead_expansion:impact_grenade','pneumaticcraft:micromissiles','immersiveengineering:empty_casing',
'immersiveengineering:potion','immersiveengineering:dragons_breath','immersiveengineering:silver','immersiveengineering:he','immersiveengineering:empty_shell',
'immersiveengineering:casull','immersiveengineering:armor_piercing','immersiveengineering:buckshot','immersiveengineering:wolfpack',
'immersiveengineering:homing','immersiveengineering:firework','immersiveengineering:flare','immersiveengineering:mold_bullet_casing',
'immersiveengineering:chemthrower','immersiveengineering:toolupgrade_revolver_magazine','immersiveengineering:turret_gun',
'immersiveengineering:turret_chem',Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),'meetyourfight:depth_star',
'iceandfire:amphithere_macuahuitl','iceandfire:amphithere_macuahuitl','immersiveengineering:toolupgrade_revolver_bayonet',
'meetyourfight:cocktail_cutlass','twist:slugs','twist:slugger','twist:spear']

onEvent('recipes', event => {
    DeleteToolandWeapon.forEach((O)=>{
        event.remove({output:`${O}`,not:{mod:"tconstruct"}})
    })
    DeleteToolandWeapon.forEach((I)=>{
        event.remove({input:`${I}`})
    })
})
