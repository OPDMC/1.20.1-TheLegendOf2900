StartupEvents.registry("item", (event) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create("brass_tube");
  event.create("silver_ingot");
  event.create("silver_nugget");
  event.create("raw_iron_nugget");
  event.create("raw_gold_nugget");
  event.create("semi_solid_steel");
  event.create("rough_diamond");
  event.create("rough_lazurite");
  event.create("lapis_lazuli_shard");
  event.create("caster_base");
  event.create("cobalt_ingot");
  event.create("cobalt_nugget");
  event.create("creative_mechanism");
  event.create("incomplete_creative_mechanism");
  event.create("angel_mechanism");
  event.create("incomplete_angel_mechanism");
  event.create("compute_mechanism");
  for(var i=1;i<=8;i++)
  {
    event.create("incomplete_compute_mechanism_" + i);
  }
  event.create("lapis_sheet");
  event.create("dragon_blood_steel_ingot").fireResistant(true).rarity("epic");
  event.create("dragon_blood_steel_nugget").fireResistant(true).rarity("epic");
  event
    .create("dragon_blood_bottle")
    .useAnimation("drink")
    .use((level, player, hand) => true)
    .food((food) =>
      food
        .hunger(20)
        .saturation(1)
        .effect("minecraft:levitation", 400, 0, 1)
        .eaten((ctx) => {
          ctx.player.give("minecraft:glass_bottle");
          if (!ctx.player.persistentData["Dragon_Lang"])
            ctx.player.tell(
              Text.of("你似乎获得了某种能力...").color("dark_purple")
            );

          ctx.player.persistentData["Dragon_Lang"] = true;
        })
    )


});

ItemEvents.modification(event => {
  [
    "molten_metals:unfired_ceramic_ingot_mold",
    "molten_metals:ceramic_ingot_mold",
    "molten_metals:ingot_mold"
  ].forEach((element) => {
    event.modify(element, (item) => {
      item.maxStackSize = 64;
    });
  });
})