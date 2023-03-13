onEvent('item.registry', event => {
    // 该物品的纹理应位于 kubejs/assets/kubejs/textures/item/my_part.png
    event.create('incomplete_dragonsteel_fire_billet').type('create:sequenced_assembly').displayName('龙炎钢钢柸（半成品）')
    event.create('incomplete_dragonsteel_ice_billet').type('create:sequenced_assembly').displayName('龙霜钢钢柸（半成品）')
    event.create('incomplete_dragonsteel_lightning_billet').type('create:sequenced_assembly').displayName('龙霆钢钢柸（半成品）')
  })
