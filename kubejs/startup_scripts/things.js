onEvent('item.registry', event => {
    //注册龙钢半成品
    event.create('incomplete_dragonsteel_fire_billet').type('create:sequenced_assembly').displayName('龙炎钢钢柸（半成品）')
    event.create('incomplete_dragonsteel_ice_billet').type('create:sequenced_assembly').displayName('龙霜钢钢柸（半成品）')
    event.create('incomplete_dragonsteel_lightning_billet').type('create:sequenced_assembly').displayName('龙霆钢钢柸（半成品）')
  })
