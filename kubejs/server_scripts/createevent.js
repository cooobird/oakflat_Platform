//玩家使用重型武器时获得缓慢效果
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tconstruct:cleaver')){
        event.player.potionEffects.add("minecraft:slowness",2,1,false,false);
    }
})
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tconstruct:scythe')){
        event.player.potionEffects.add("minecraft:slowness",2,1,false,false);
    }
})
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tconstruct:broad_axe')){
        event.player.potionEffects.add("minecraft:slowness",2,1,false,false);
    }
})
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tconstruct:vein_hammer')){
        event.player.potionEffects.add("minecraft:slowness",2,3,false,false);
    }
})
//玩家使用轻型武器获得速度效果
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tconstruct:dagger')){
        event.player.potionEffects.add("minecraft:speed",1,1,false,false);
    }
})
onEvent("player.tick",event=>{
    if(event.player.mainHandItem==('tinker_rapier:rapier_tic')){
        event.player.potionEffects.add("minecraft:speed",1,1,false,false);
    }
})
//进入服务器自强制启用飞轮的优化
onEvent("player.tick",event=>{
    if(event.player.logged_in){
        event.server.runCommandSilent('flywheel backend off');
    }
})
//三魂获取




