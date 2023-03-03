onEvent('item.registry', event => {
    // 该物品的纹理应位于 kubejs/assets/kubejs/textures/item/my_part.png
    event.create('incomplete_dragonsteel_billet').type('create:sequenced_assembly').displayName('龙钢钢柸（半成品）')
  })
